import { useEffect, useRef } from 'react';
import { Section1Style } from './style';
import gsap from 'gsap';

const Section1 = () => {
    const circleRef = useRef(null);
    useEffect(() => {
        gsap.to('.animation-text', {
            rotation: 360,
            repeat: -1,
            ease: 'linear',
            duration: 50,
            transformOrigin: '50% 50%',
            overwrite: 'auto',
            clearProps: 'transform',
        });
    }, [circleRef]);
    return (
        <Section1Style>
            <div className="animation-text"></div>
            <div className="big-img"></div>
            <strong>새로움의</strong>
            <span>케이스를 열다.</span>
        </Section1Style>
    );
};

export default Section1;
