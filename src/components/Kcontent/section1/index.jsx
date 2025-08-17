import React from 'react';
import { Section1Style } from './style';

const Section1 = () => {
    return (
        <Section1Style>
            <div className="kcontent">
                <div className="kcontent-image big">
                    <img src="../public/images/Kcontent/KC-1.jpg" alt="" />
                </div>
                <div className="kcontent-text">
                    <h3>K - CONTENT</h3>
                    <h2>오징어게임 x 케이스티파이</h2>
                </div>
            </div>
        </Section1Style>
    );
};

export default Section1;
