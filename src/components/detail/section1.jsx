import React from 'react';
import { Section1Style } from './style';

const Section1 = () => {
    return (
        <Section1Style>
            <div className="inner">
                <div className="image-area">
                    <div className="left">
                        <div className="img">
                            <img src="/images/detail/phone/Big Bobo/3.png" alt="" />
                        </div>
                        <div className="img">
                            <img src="/images/detail/phone/Big Bobo/2.webp" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <img src="/images/detail/phone/Big Bobo/1.webp" alt="" />
                    </div>
                </div>
                <div className="info-area">
                    <div className="top">
                        <div className="price">
                            <span>리플케이스 - 프림로즈 핑크 2</span>
                            <span>₩77000</span>
                        </div>
                        <div className="context">
                            <span className="first">손안에 피어나는 꽃들의 속삭임</span>
                            <span className="second">
                                미니멀리즘의 새로운 물결이 찾아왔습니다. 
                                <br />
                                강력한 보호력과 심플함의 미학을 세련되게 담아낸 실루엣.
                                <br />
                                아름다운 계절에 꽃처럼 물든 컬러로 만나보세요.
                            </span>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="select">
                            <span>Apple</span>
                            <span>|</span>
                            <span style={{ width: 126 }}>아이폰 16 Pro Max</span>
                            <i>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="20"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_1956_17091)">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M11.089 13.0883C10.9328 13.2445 10.7208 13.3323 10.4999 13.3323C10.2789 13.3323 10.067 13.2445 9.91071 13.0883L5.19655 8.37415C5.11695 8.29727 5.05347 8.20532 5.00979 8.10365C4.96612 8.00198 4.94313 7.89263 4.94217 7.78198C4.94121 7.67133 4.96229 7.5616 5.00419 7.45919C5.0461 7.35677 5.10797 7.26373 5.18622 7.18548C5.26446 7.10724 5.3575 7.04536 5.45992 7.00346C5.56233 6.96156 5.67206 6.94048 5.78271 6.94144C5.89336 6.9424 6.00271 6.96539 6.10438 7.00906C6.20605 7.05274 6.29801 7.11622 6.37488 7.19581L10.4999 11.3208L14.6249 7.19581C14.782 7.04401 14.9925 6.96002 15.211 6.96192C15.4295 6.96382 15.6386 7.05146 15.7931 7.20596C15.9476 7.36047 16.0352 7.56948 16.0371 7.78798C16.039 8.00648 15.955 8.21698 15.8032 8.37415L11.089 13.0883Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1956_17091">
                                            <rect
                                                width="20"
                                                height="20"
                                                fill="white"
                                                transform="translate(0.5)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </i>
                        </div>
                        <div className="protected">
                            <strong className="label">보호성능</strong>
                            <span>기본</span>
                            <strong className="label">무게</strong>
                            <span>가벼움</span>
                        </div>
                        <div className="color">
                            <strong className="label">색상</strong>
                            <ul>
                                <li style={{ backgroundColor: 'white' }} className="white"></li>
                                <li style={{ backgroundColor: '#D3BDAF' }} className="ibory"></li>
                                <li style={{ backgroundColor: '#EDBAD2' }} className="pink"></li>
                                <li
                                    style={{ backgroundColor: '#2D59C5' }}
                                    className="light-blue"
                                ></li>
                                <li style={{ backgroundColor: '#000080' }} className="blue"></li>
                                <li style={{ backgroundColor: '#000' }} className="black"></li>
                            </ul>
                        </div>
                        <div className="buy">BUY NOW</div>
                        <div className="fn-btns">
                            <span>ADD TO CART</span>
                            <span>WISH LIST</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <strong>Product Features</strong>
                <img src="/images/detail/phone/phone.png" alt="" />
            </div>
        </Section1Style>
    );
};

export default Section1;
