/* Same-origin bridge: auth tokens stay inside the existing Supabase client/storage. */
'use strict';
(() => {
  const origin=location.origin;
  if(location.pathname==='/moonwords/account.html')return;
  document.documentElement.dataset.moonsAuth='required';
  let overlay=document.getElementById('moons-auth-overlay');
  if(!overlay){overlay=document.createElement('section');overlay.id='moons-auth-overlay';document.body.append(overlay);}
  overlay.setAttribute('role','status');
  const destination=new URL(location.href);['access_token','refresh_token','code','token_hash','provider_token','provider_refresh_token'].forEach(key=>destination.searchParams.delete(key));
  const login=new URL('/moonwords/account.html',origin);login.searchParams.set('return',destination.pathname+destination.search);
  function show(title,description){document.documentElement.classList.remove('moons-auth-ready');overlay.replaceChildren();const mark=document.createElement('b');mark.textContent='☾ MOONS';const h=document.createElement('h1');h.textContent=title;const p=document.createElement('p');p.textContent=description;const a=document.createElement('a');a.href=login.href;a.textContent='통합 계정으로 로그인';overlay.append(mark,h,p,a);}
  show('내 공간을 여는 중…','기존 MoonWords 계정으로 모든 도구를 이용할 수 있어요.');
  const frame=document.createElement('iframe');frame.id='moons-auth-frame';frame.title='MOONS 계정 연결';frame.hidden=true;frame.src=new URL('/moonwords/account.html?bridge=1',origin).href;document.body.append(frame);
  let userId=null,responded=false;
  const timeout=setTimeout(()=>{if(!responded)show('계정 연결을 확인하지 못했어요.','MoonWords 배포가 완료됐는지 확인하고 다시 시도해 주세요.');},15000);
  window.addEventListener('message',event=>{
    if(event.origin!==origin||event.source!==frame.contentWindow||event.data?.type!=='moons-auth')return;
    responded=true;clearTimeout(timeout);const state=event.data;
    if(state.state==='signed-in'&&typeof state.userId==='string'&&state.userId.length>0){
      if(userId&&userId!==state.userId){location.reload();return;}userId=state.userId;
      document.documentElement.classList.add('moons-auth-ready');overlay.replaceChildren();
      const actions=document.getElementById('moons-account-actions');if(actions){actions.replaceChildren();const label=document.createElement('span');label.textContent=String(state.name||'MOONS 회원');const out=document.createElement('button');out.type='button';out.textContent='로그아웃';out.addEventListener('click',()=>{show('로그아웃 중…','이 브라우저의 로그인 정보를 정리합니다.');frame.contentWindow.postMessage({type:'moons-signout'},origin);});actions.append(label,out);}
    }else{show(state.state==='error'?'계정 연결 확인이 필요해요.':'MOONS에 로그인하세요.','내 본문·시험·학습지는 로그인한 계정에서만 볼 수 있어요. 기존 MoonWords 계정을 그대로 사용할 수 있습니다.');}
  });
})();
