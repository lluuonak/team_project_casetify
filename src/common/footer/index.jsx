import { Link } from "react-router-dom";
import { FooterStyle } from "./style";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="inner">
        <div className="left">
          <span>케이스티파이의 더많은 정보</span>
          <ul className="sns">
            <li>
              <Link>
                <img src="/images/footer/1.png" alt="" />
              </Link>
            </li>
            <li>
              <Link>
                <img src="/images/footer/2.png" alt="" />
              </Link>
            </li>
            <li>
              <Link>
                <img src="/images/footer/3.png" alt="" />
              </Link>
            </li>
            <li>
              <Link>
                <img src="/images/footer/4.png" alt="" />
              </Link>
            </li>
            <li>
              <Link>
                <img src="/images/footer/5.png" alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="info">
            <span>
              사업자등록번호 : 580-88-02026 | 통신판매업 신고번호 : 제
              2021-서울강남-03049 호 | 주소 : 서울특별시 강남구 선릉로 818 6층,
              케이스티파이
            </span>
            <span>
              케이스티파이: 케이스타그램 리미티드(Casetify: Casetagram Limited)
              | 케이스티파이 유한회사 (CASETiFY) | 대표: 응푸이순 웨슬리 (Wesley
              Ng)
            </span>
          </div>
          <strong>Copyright © 2025 CASETiFY | 개인정보 처리방침 | 약관</strong>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
