import React from 'react';
import { Section1Style } from './style';

const Section1 = () => {
    return (
        <Section1Style>
            <div className="kart">
                <div className="kart-image">
                    <img src="../public/images/Kart/KA-1.jpg" alt="" />
                </div>
                <div className="kart-text">
                    <h3>K - ART</h3>
                    <h2>국립중앙박물관 x 케이스티파이</h2>
                </div>
            </div>
        </Section1Style>
    );
};

export default Section1;
