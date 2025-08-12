import React from 'react';
import { Section1Style } from './style';

const Section1 = () => {
    return (
        <Section1Style>
            <div className="sports">
                <div className="sports-image big">
                    <img src="../public/images/Ksports/K1.jpg" alt="" />
                </div>
                <div className="sports-text">
                    <h3>K - SPORTS</h3>
                    <h2>KBO x 케이스티파이</h2>
                </div>
            </div>
        </Section1Style>
    );
};

export default Section1;
