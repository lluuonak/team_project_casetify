import { Link } from "react-router-dom";
import { Section5Style } from "./style";

const Section5 = () => {
  return (
    <Section5Style>
      <img src="/images/section5/con4bg1.png" alt="" className="bg-img1" />
      <img src="/images/section5/con4bg.png" alt="" className="bg-img2" />
      <ul>
        <li className="left">
          <div className="l-1st">
            <img src="/images/section5/Camera Lens Gem - Silver.png" alt="" />
            <span>Camera Lens Gem</span>
          </div>
          <div className="l-2nd">
            <img
              src="/images/section5/Pieces of Oasis Snappy Wallet_black.webp"
              alt=""
            />
            <div className="text-box">
              <span>MagSafe</span>
              <span>Card Wallet</span>
            </div>
          </div>
          <div className="l-3rd">
            <img src="/images/section5/QUIT COFFEE.webp" alt="" />
            <div className="text-box">
              <span>Wireless</span>
              <span>Car Charger</span>
            </div>
          </div>
        </li>
        <li className="right">
          <div className="r_1st">
            <Link>
              <div className="text-area">
                <span>취향을 담는 또 하나의 선택,</span>
                <strong>액세서리 컬렉션</strong>
              </div>
              <div className="more">MORE VIEW</div>
            </Link>
          </div>
          <div className="r_2nd">
            <img
              src="/images/section5/Magnetic Privacy MacBook Screen Protector.png"
              alt=""
            />
            <div className="text-area">
              <span>Privacy</span>
              <span>Screen Protector</span>
            </div>
          </div>
          <div className="r_3rd">
            <img src="/images/section5/Bounce Band - Cobalt Blue.png" alt="" />
            <div className="text-area">
              <span>Bounce</span>
              <span>Band</span>
            </div>
          </div>
          <div className="r_4th">
            <img src="/images/section5/laptop sleeve.png" alt="" />
            <div className="text-area">
              <span>Laptop Sleeve</span>
            </div>
          </div>
        </li>
      </ul>
    </Section5Style>
  );
};

export default Section5;
