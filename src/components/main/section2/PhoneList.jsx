import gsap from 'gsap';
import { PhoneListStyle } from './style';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const PhoneList = () => {
    const containerRef = useRef(null);
    useEffect(() => {
        const items = document.querySelectorAll('li .gsap-items');
        gsap.fromTo(
            items,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.3,
                scrollTrigger: {
                    trigger: items[0],
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    return (
        <PhoneListStyle ref={containerRef}>
            <li className="rangle">
                <img className="gsap-items" src="/images/section2/1.png" alt="" />
            </li>
            <li className="circle orange">
                <img className="gsap-items" src="/images/section2/2.webp" alt="" />
            </li>
            <li className="circle">
                <img className="gsap-items" src="/images/section2/3.jpg" alt="" />
            </li>
            <li className="rangle gray">
                <img className="gsap-items" src="/images/section2/4.webp" alt="" />
            </li>
            <li className="rangle">
                <img className="gsap-items" src="/images/section2/5.webp" alt="" />
            </li>
            <li className="circle">
                <img className="gsap-items" src="/images/section2/6.webp" alt="" />
            </li>
        </PhoneListStyle>
    );
};

export default PhoneList;
