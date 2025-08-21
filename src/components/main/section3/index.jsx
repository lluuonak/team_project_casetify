import { useEffect, useRef } from 'react';
import { Section3Style } from './style';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Section3 = () => {
    useEffect(() => {
        gsap.to('.rotation-img', {
            rotation: 360,
            repeat: -1,
            ease: 'linear',
            duration: 100,
            transformOrigin: '50% 50%',
            overwrite: 'auto',
            clearProps: 'transform',
        });
    }, []);
    return (
        <Section3Style>
            <div className="inner">
                <div className="rotation-img"></div>
                <div className="left"></div>
                <div className="right"></div>
                <article>
                    <div className="text-area">
                        <strong>"취향 따라, 무드 따라, 케이스 따라"</strong>
                        <span>다양한 취향, 다양한 순간. 그 모두를 위한 케이스 컬렉션</span>
                    </div>

                    <div className="more">
                        <Link to="/product">VIEW MORE</Link>
                    </div>
                </article>
            </div>
        </Section3Style>
    );
};

export default Section3;
