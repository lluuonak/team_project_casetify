# ✅ 작업 가이드

## 1. 폴더 구조 및 기능

![스크린샷 2025-08-03 오후 6.05.09.png](attachment:ee301979-6e44-4f23-8413-b90a9479bd0d:스크린샷_2025-08-03_오후_6.05.09.png)

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

![스크린샷 2025-08-03 오후 6.19.00.png](attachment:14c039f3-020a-4be3-910a-a8be1b809c87:스크린샷_2025-08-03_오후_6.19.00.png)
