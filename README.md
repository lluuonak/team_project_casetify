# ✅ 작업 가이드

## 1. 폴더 구조 및 기능

<img width="194" height="266" alt="스크린샷 2025-08-03 오후 6 05 09" src="https://github.com/user-attachments/assets/1561ab2f-5531-4282-b4a1-af3b67caa893" />

public : 주로 이미지가 저장 되는 경로로 사용 할 것 같습니다. ( src 경로가 간단합니다)

assets : api로 가지고 올 수 있는 데이터 파일이 저장 될 예정입니다.

common : header, footer에 필요한 jsx 파일이 저장됩니다. (Layout관련)

pages : 각 페이지별 index.jsx 이 저장됩니다.

components : page의 index파일에서 필요로한 컨텐츠 요소들을 분할하여 저장 합니다.
기본적으로 작업시 컨텐츠의 메인 파일은 `index.jsx`로 만들어주시고, 추가적인 요소들을 따로 만들어서 붙여주도록 합니다.

store : redux에서 사용될 module 파일을 저장합니다.

styled : GlobalStyle에 해당하는 파일이 저장되는 위치입니다. 프로젝트 전체에 사용될 폰트, li 스타일 등의 수정 사항이 발생되면, 해당 폴더에 있는 js 파일을 수정 해주시면 됩니다.

## 2. 작업 규칙

코드 작성시 개인 성향이 다 다르기 때문에 **css 수정 및 기능 수정 시 요소 체크가 어려울 수 있기 때문**에 작업자들 끼리 규칙을 정하도록 합니다.

### 규칙 사항

- components에서 추가되는 페이지별 컴포넌트 요소의 index.jsx 파일은 항상 `section`으로 작업하면 좋을 것 같습니다.

```jsx
import SectionSwiper from "./SectionSwiper";
import { Section1Style } from "./style";

const Section1 = () => {
  return (
    <Section1Style>
      <div className="inner">
        <SectionSwiper />
      </div>
    </Section1Style>
  );
};

export default Section1;

//style.js
import styled from "styled-components";

export const Section1Style = styled.section`
  width: 100%;
  margin: 200px 0;
  .inner {
  }
`;
```

- className의 이름이 길어질 경우는 `-` 를 이용하여 분할처리 합니다.
<img width="498" height="326" alt="스크린샷 2025-08-03 오후 6 19 00" src="https://github.com/user-attachments/assets/fc2b29c2-0aaf-42e6-a50f-8e6ad09e701e" />

---
# 공용 레포지토리 사용법

### 1. 원본 레포지토리 클론
메인 레포지토리에서 우측에 `FORK`를 눌러서 본인 깃에 포크 한다(레포지토리 복사)

### 2. GitHub DeskTop을 설치 합니다.
https://docs.github.com/ko/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop

### 3. 내 로컬환경(컴퓨터)에 CLONE 하기
1번에서 fork 한 레포지토리의 URL을 이용하여 내 작업환경에 클론을 합니다.

<img width="878" alt="스크린샷 2025-06-05 오후 5 33 46" src="https://github.com/user-attachments/assets/22f494ee-720d-42fb-b01c-eb966d064523" />

상기 이미지에 있는 `https`로 시작하는 url을 복사합니다.<br>
<img width="941" alt="스크린샷 2025-06-05 오후 5 35 21" src="https://github.com/user-attachments/assets/c814f4d1-e89d-441a-acf5-bc363d6d773a" />
<br>
깃허브 데스크탑을 실행하면 초기 화면에 clone할수 있는 두번째 메뉴를 선택하고
<img width="505" alt="스크린샷 2025-06-05 오후 5 36 31" src="https://github.com/user-attachments/assets/f37a6c1b-d360-49e8-8937-2950c22eeff1" />
<br>
표시한 첫번째 칸에 복사한 url을 입력하고,
두번째 항목에는 작업할 폴더 위치를 설정합니다.(클론되는 폴더가 생성되기 때문에 경로 설정을 잘 해야 합니다.)
ex) 바탕화면에 팀깃 이라는 폴더를 생성하고 해당 폴더를 Local Path로 경로 설정 하면 
팀깃/teamPF 폴더가 생성되고 해당 teamPF 폴더 안에는 작업 파일이 생성됩니다.

### 4. 원본 요소와 수정 사항 맞추기
항상 작업 전 메인 레포지토리에 변경 사항이 생길 수 있으니 
<img width="966" alt="스크린샷 2025-06-05 오후 5 55 47" src="https://github.com/user-attachments/assets/ab8e65e8-dec3-4248-ad21-196c9ea35226" />
<br>
오른쪽 빨간 영역을 먼저 클릭 합니다.
<br>
이후에 
<br>
두번째 영역을 클릭하여
<Br>
<img width="363" alt="스크린샷 2025-06-05 오후 5 58 31" src="https://github.com/user-attachments/assets/674745db-4c90-41b7-bb72-249c3276a131" />
<br>
`upstream/main` 이라고 된 항목을 선택 후 병합 시켜줍니다.

### 5. 수정된 사항 
<img width="954" alt="스크린샷 2025-06-05 오후 5 52 58" src="https://github.com/user-attachments/assets/f1b73dcf-b5ad-4ed8-a0c3-5489377abe51" />
<br>
클론 한 위치에서 소스 파일을 수정하면 깃허브 데스크탑에서 수정된 파일의 목록이 생겨납니다.<br>
목록 아래에 Summary는 커밋 메시지 이고, <br>
그 아래는 커밋의 설명을 기재하는 영역 입니다.<br>
커밋 메시지는 필수 요소이기때문에 입력 해주어야 합니다.<br>
입력 내용을 전부 기재 후 아래에 파란 버튼을 클릭 합니다.<br>
4번항목에서 첫번째로 클릭 한 영역에 push 항목을 실행해줍니다.<br>


