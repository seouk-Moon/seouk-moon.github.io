# MOONS · 메인 홈페이지

MoonWords, docx2hwp, Printmaker, Moon Drive로 이동하는 모바일 우선 앱 모음 홈페이지입니다.

- 사이트에 보이는 이름: **MOONS**
- 새 GitHub 저장소 이름: **seouk-moon.github.io**
- 배포 후 메인 주소: **https://seouk-moon.github.io/**
- 기존 앱은 기존 저장소와 주소에서 계속 운영합니다.

## 네가 할 일 (GitHub Desktop 기준, 처음 한 번)

1. GitHub Desktop을 켜고 `File → New repository…`를 선택합니다.
2. Name에 `seouk-moon.github.io`를 정확히 입력합니다. Local path는 원하는 저장 위치로 선택하고 `Create repository`를 누릅니다. 이미 같은 이름의 저장소가 있다면 새로 만들지 말고 그 저장소를 Clone하여 아래 파일을 넣습니다.
3. 이 ZIP을 압축 해제합니다. 압축을 푼 **내용물 전체**를 방금 만든 저장소 폴더에 복사합니다. 저장소 폴더 바로 아래에 `index.html`, `styles.css`, `app.js`, `favicon.svg`, `.nojekyll`, `README.md`가 있어야 합니다. `dist`나 `moons-homepage`라는 하위 폴더 속에 넣지 마세요. 이 ZIP은 처음부터 올바른 최상위 구조로 만들었습니다.
4. GitHub Desktop의 Changes 목록에서 파일을 확인합니다. Summary에 `Create MOONS homepage`라고 쓰고 `Commit to main`을 누릅니다. 브랜치 이름이 main과 다르면 표시된 현재 브랜치로 커밋합니다.
5. 상단 `Publish repository`를 누릅니다. GitHub 계정이 `seouk-Moon`인지 확인하고, `Keep this code private`는 해제해서 Public으로 게시합니다. 이미 GitHub에 있는 저장소를 Clone한 경우에는 `Push origin`을 누릅니다.
6. `Repository → View on GitHub`로 웹에서 저장소를 엽니다.
7. 저장소 `Settings → Pages → Build and deployment`에서 Source를 **Deploy from a branch**, Branch를 **main**, 폴더를 **/(root)**로 선택하고 Save합니다. 4번에서 다른 브랜치를 썼다면 그 브랜치를 선택합니다.
8. GitHub의 Pages 배포가 끝나면 `https://seouk-moon.github.io/`에 접속합니다. 배포 중이면 Actions 탭에서 Pages 작업의 완료 여부를 확인할 수 있습니다.

Node.js, npm 설치나 별도의 빌드 명령은 필요하지 않습니다. Supabase SQL 또는 Edge Function 변경도 필요하지 않습니다.

## 연결한 앱

| 앱 | 연결 주소 |
|---|---|
| MoonWords | https://seouk-moon.github.io/moonwords/ |
| docx2hwp | https://seouk-moon.github.io/docx2hwp/ |
| Printmaker | https://seouk-moon.github.io/printmaker/ |
| Moon Drive | https://seouk-moon.github.io/moonwords/drive.html |

앱을 누르면 같은 탭에서 해당 앱으로 이동합니다. 브라우저 뒤로가기로 MOONS로 돌아올 수 있습니다. 각 앱의 계정과 저장 정보는 해당 앱에서 관리합니다.

## 나중에 바꾸는 방법

- 문구와 앱 주소: `index.html`의 해당 카드 제목, 설명, `href`를 수정합니다.
- 색상과 배치: `styles.css`를 수정합니다.
- 분류 버튼: `app.js`가 각 카드의 `data-category`로 필터링합니다.
- 새 앱: `index.html`의 카드 `<a class="app-card ...">...</a>` 하나를 복사해 제목/설명/주소/고유 id를 바꿉니다. category는 study(학습), document(문서), storage(파일) 중 하나를 넣습니다. 상단 `04 TOOLS`와 '모든 앱 4'의 숫자도 수정합니다.
- 변경 후 GitHub Desktop에서 Commit → Push origin하면 자동으로 다시 배포됩니다.

## 검증 범위

JavaScript 문법 검사, 실제 브라우저에서 앱 링크 4개와 문서 필터 동작, 360/390/768px 프레임의 가로 넘침과 카드 표시를 확인했습니다. 모든 연결 앱의 공개 주소는 2026-10-28에 HTTP 200을 확인했습니다. 각 앱 내부의 로그인/변환 기능까지 재검증한 것은 아닙니다. GitHub에 생성/배포하는 단계는 사용자가 위 순서대로 진행합니다.

## GitHub 공식 설명

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop
