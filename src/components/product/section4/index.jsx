import React from 'react';
import { Section4Style } from './style';

const section4 = () => {
    return (
        <Section4Style>
            <div className="series">
                <div className="series-text">
                    <p>대표 시리즈 한눈에 보기</p>
                </div>
                <ul className="series-img">
                    <li className="impact">
                        <span>Impact 시리즈</span>
                    </li>
                    <li className="bounce">
                        <span>Bounce 시리즈</span>
                    </li>
                    <li className="ring">
                        <span>Ring 시리즈</span>
                    </li>
                </ul>
            </div>
            <div className="bottom-img">
                <img src="/images/product/bottom-img.png" alt="" />
            </div>
        </Section4Style>
    );
};

export default section4;
