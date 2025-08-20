import React from 'react';
import { Section2Style } from './style';

const index = () => {
    return (
        <Section2Style>
            {/* 상단 텍스트 영역 */}
            <div className="text-box">
                기기는 같아도 <br />
                <span>스타일</span>은 달라야 하니까.
            </div>
            {/* 이미지 영역 */}
            <div className="img-box">
                <ul>
                    <li>
                        <img src="../../public/images/product/product-menu1.png" alt="" />
                        <p>Apple</p>
                    </li>
                    <li>
                        <img src="../../public/images/product/product-menu2.png" alt="" />
                        <p>Samsung</p>
                    </li>
                    <li>
                        <img src="../../public/images/product/product-menu3.png" alt="" />
                        <p>Custom</p>
                    </li>
                    <li>
                        <img src="../../public/images/product/product-menu4.png" alt="" />
                        <p>ACC</p>
                    </li>
                </ul>
            </div>
            <div className="bottom-text">
                <p>Product</p>
            </div>
        </Section2Style>
    );
};

export default index;
