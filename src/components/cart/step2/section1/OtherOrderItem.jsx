import React from 'react';
import { OtherOrderItemStyle } from './style';

const OtherOrderItem = () => {
    return (
        <OtherOrderItemStyle>
            <div className="img"></div>
            <div className="inner">
                <div className="name-category">
                    <span className="name">BEARS Collage Case</span>
                    <span className="category">Beige / 아이폰 16 Pro Max</span>
                </div>
                <div className="price">
                    <span>96,000 원</span>
                </div>
                <div className="qty">
                    <div className="btn">-</div>
                    <div>1</div>
                    <div className="btn">+</div>
                </div>
                <i className="del-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                    >
                        <path
                            d="M9 9L1.5 1.5M9 9L16.5 16.5M9 9L16.5 1.5M9 9L1.5 16.5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </i>
            </div>
        </OtherOrderItemStyle>
    );
};

export default OtherOrderItem;
