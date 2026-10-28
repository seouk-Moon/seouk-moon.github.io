# MOONS · 앱 모음 홈페이지

사이트 이름: MOONS / 저장소: seouk-moon.github.io

## 이번 업데이트
기존 4개 앱에 Moon OCR과 Moon Exam을 추가해 총 6개 앱으로 구성했습니다. MoonWords 하단에서 제거한 도구들은 여기서 열 수 있습니다.

## 네가 할 일
1. 함께 받은 MoonWords 수정 ZIP을 **moonwords** 저장소에 넣고 Commit → Push합니다. `ocr.html`이 포함돼야 새 카드가 정상 동작합니다.
2. **이 ZIP**의 파일들은 **seouk-moon.github.io** 저장소 최상위에 덮어씁니다. index.html이 바로 보이는 위치입니다.
3. GitHub Desktop에서 Commit → Push origin합니다.
4. 기존 Pages 배포가 끝나면 https://seouk-moon.github.io/ 를 새로고침합니다.

이미 만들어 배포한 홈페이지이므로 새 저장소를 만들거나 Pages 설정을 바꿀 필요가 없습니다. 빌드/설치/API 키/Supabase 설정도 필요 없습니다.

| 앱 | 주소 |
|---|---|
| MoonWords | https://seouk-moon.github.io/moonwords/ |
| docx2hwp | https://seouk-moon.github.io/docx2hwp/ |
| Printmaker | https://seouk-moon.github.io/printmaker/ |
| Moon Drive | https://seouk-moon.github.io/moonwords/drive.html |
| Moon OCR | https://seouk-moon.github.io/moonwords/ocr.html |
| Moon Exam | https://seouk-moon.github.io/moonwords/exam.html |

Moon OCR은 일반 PDF 텍스트 추출 및 스캔 PDF의 영어·한국어 OCR 도구입니다. 복사/TXT 저장이 가능하고, 사용하려고 MoonWords에 로그인할 필요는 없습니다. 직접 JPG/PNG 파일을 올리는 도구로 설명하지 않습니다.

문구/앱 주소는 index.html, 디자인은 styles.css, 분류 동작은 app.js에서 수정합니다. 앱을 추가할 때에는 앱 개수와 분류도 맞춰주세요. 기존처럼 정적 HTML 사이트이며 JavaScript가 꺼져 있어도 앱 링크를 열 수 있습니다.

검증: 브라우저의 6개 앱/문서 분류(3개), 모바일 390px 레이아웃, 자바스크립트 문법 검사. 운영 GitHub에 직접 반영하지 않았습니다.
