import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '@fontsource/inter/400.css'; // 일반 두께
import '@fontsource/inter/700.css'; // 볼드 두께
import 'pretendard/dist/web/variable/pretendardvariable.css';
import '@fontsource/prata';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  *{
    box-sizing:border-box;
  }
  body {
    font-size: 16px;
    line-height: 1.6;
    /* font-family: 'Noto Sans KR', sans-serif; */
    font-family: 'Pretendard', sans-serif;
    color:#333;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  section{
    width: 100%;
    height: 1040px;
    background-color: #000;
  }
  a {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none }
  img { vertical-align: top; }
  .inner {margin:auto; box-sizing:border-box;}
  .main { width: 100%; overflow:hidden;}
  .main h2 { text-align: center; font-size: 40px; margin-bottom: 80px; }
   button { border:none; cursor: pointer; }

`;

export default GlobalStyle;
