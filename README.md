# DS Portfolio

윤대식 게임 개발 포트폴리오 웹사이트

---

## GitHub Pages 배포 방법 (초보자용 단계별 가이드)

### 준비물
- GitHub 계정 (없으면 [github.com](https://github.com) 에서 무료 가입)
- 포트폴리오 파일 3개: `index.html`, `style.css`, `script.js`

---

### STEP 1 — 저장소(Repository) 만들기

1. [github.com](https://github.com) 로그인
2. 오른쪽 위 `+` 버튼 클릭 → **New repository**
3. Repository name 입력:
   - **추천**: `mmanimalmm.github.io` (본인 username 그대로 입력)
   - 이 이름으로 만들면 주소가 `https://mmanimalmm.github.io` 가 됨
4. **Public** 선택 (Pages는 Public이어야 무료)
5. **Create repository** 클릭

---

### STEP 2 — 파일 업로드

1. 방금 만든 저장소 페이지에서 **uploading an existing file** 링크 클릭
   (또는 **Add file** → **Upload files**)
2. 아래 3개 파일을 드래그 앤 드롭:
   - `index.html`
   - `style.css`
   - `script.js`
3. 아래 **Commit changes** 버튼 클릭

---

### STEP 3 — GitHub Pages 활성화

> 저장소 이름을 `mmanimalmm.github.io` 로 만들었다면 이 단계 불필요 — 자동 활성화

다른 이름으로 만들었을 경우:

1. 저장소 상단 **Settings** 탭 클릭
2. 왼쪽 사이드바 **Pages** 클릭
3. **Source** → **Deploy from a branch** 선택
4. Branch: **main** / 폴더: **/ (root)** 선택
5. **Save** 클릭

---

### STEP 4 — 접속 확인

- 저장소 이름이 `mmanimalmm.github.io` 인 경우 → `https://mmanimalmm.github.io`
- 다른 이름(예: `portfolio`)인 경우 → `https://mmanimalmm.github.io/portfolio`

배포 반영까지 **1~3분** 소요. Settings > Pages 페이지에서 URL 확인 가능.

---

## 파일 구조

```
DS_Portfolio/
├── index.html   # 메인 페이지
├── style.css    # 스타일시트
├── script.js    # 인터랙션 스크립트
└── README.md    # 이 파일
```

## 기술 스택

- HTML5 / CSS3 / JavaScript (Vanilla)
- Google Fonts (Inter)
- YouTube Embed API
- GitHub Pages 호스팅
