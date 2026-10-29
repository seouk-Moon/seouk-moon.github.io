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
  const login=new URL('/account.html',origin);login.searchParams.set('return',destination.pathname+destination.search);
  function show(title,description){document.documentElement.classList.remove('moons-auth-ready');overlay.replaceChildren();const mark=document.createElement('b');mark.textContent='☾ MOONS';const h=document.createElement('h1');h.textContent=title;const p=document.createElement('p');p.textContent=description;const a=document.createElement('a');a.href=login.href;a.textContent='통합 계정으로 로그인';overlay.append(mark,h,p,a);}
  show('내 공간을 여는 중…','기존 MoonWords 계정으로 모든 도구를 이용할 수 있어요.');
  const frame=document.createElement('iframe');frame.id='moons-auth-frame';frame.title='MOONS 계정 연결';frame.hidden=true;frame.src=new URL('/moonwords/account.html?bridge=1',origin).href;
  let userId=null,responded=false,waiting=false,lastCheck=0,timeout;
  function offerRetry(){const button=document.createElement('button');button.type='button';button.textContent='다시 확인하기';button.addEventListener('click',()=>check(true));overlay.append(button);}
  function armTimeout(){clearTimeout(timeout);timeout=setTimeout(()=>{waiting=false;if(!responded){show('계정 연결을 확인하지 못했어요.','연결이 지연되고 있어요. 다시 확인하거나 통합 로그인 화면을 열어 주세요.');offerRetry();}},30000);}
  function check(reload=false){if(waiting&&!reload)return;waiting=true;responded=false;lastCheck=Date.now();show('내 공간을 여는 중…','로그인 상태를 다시 확인하고 있어요.');armTimeout();if(reload){frame.src=new URL('/moonwords/account.html?bridge=1&retry='+Date.now(),origin).href;}else{frame.contentWindow?.postMessage({type:'moons-auth-check'},origin);}}
  armTimeout();
  window.addEventListener('message',event=>{
    if(event.origin!==origin||event.source!==frame.contentWindow||event.data?.type!=='moons-auth')return;
    responded=true;waiting=false;lastCheck=Date.now();clearTimeout(timeout);const state=event.data;
    if(state.state==='signed-in'&&typeof state.userId==='string'&&state.userId.length>0){
      if(userId&&userId!==state.userId){location.reload();return;}userId=state.userId;
      document.documentElement.classList.add('moons-auth-ready');overlay.replaceChildren();
      const actions=document.getElementById('moons-account-actions');if(actions){actions.replaceChildren();const label=document.createElement('span');label.textContent=String(state.name||'MOONS 회원');const out=document.createElement('button');out.type='button';out.textContent='로그아웃';out.addEventListener('click',()=>{show('로그아웃 중…','이 브라우저의 로그인 정보를 정리합니다.');frame.contentWindow.postMessage({type:'moons-signout'},origin);});const settings=document.createElement('a');settings.href='/account.html?mode=settings';settings.textContent='계정 설정';actions.append(label,settings,out);}
    }else{show(state.state==='error'?'계정 연결 확인이 필요해요.':'MOONS에 로그인하세요.',state.state==='error'?String(state.message||'연결을 확인한 후 다시 시도해 주세요.'):'내 본문·시험·학습지는 로그인한 계정에서만 볼 수 있어요. 기존 MoonWords 계정을 그대로 사용할 수 있습니다.');if(state.state==='error')offerRetry();}
  });
  // Register the receiver before the iframe can send its initial response.
  document.body.append(frame);
  window.addEventListener('pageshow',event=>{if(event.persisted)check();});
  window.addEventListener('focus',()=>{if(Date.now()-lastCheck>30000)check();});
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&Date.now()-lastCheck>30000)check();});
})();
