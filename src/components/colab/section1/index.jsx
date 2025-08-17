import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import data from '../../../assets/colabSection1Data';
import { Section1Style } from './style';

export default function CollabShowcase() {
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [isTextAnimating, setIsTextAnimating] = useState(true);
    const [isBoxAnimating, setIsBoxAnimating] = useState(true);

    useEffect(() => {
        // 첫 등장 애니메이션 (컴포넌트 마운트 시)
        const initialTimeout = setTimeout(() => {
            setIsTextAnimating(false); // 텍스트 스윽 올라오며 등장
        }, 100);

        const initialBoxTimeout = setTimeout(() => {
            setIsBoxAnimating(false); // 0.6초 후 박스 스윽 올라오며 등장
        }, 600);

        const cycleDuration = 5000; // 5초 주기

        // 첫 사이클은 4초 후에 시작 (첫 등장 후)
        const firstCycleTimeout = setTimeout(() => {
            const mainInterval = setInterval(() => {
                // 1. 현재 컨텐츠 사라짐 (4초 후)
                setIsTextAnimating(true);
                setIsBoxAnimating(true);

                // 2. 다음 세트로 변경 (0.5초 후)
                setTimeout(() => {
                    setCurrentSetIndex((prev) => (prev + 1) % data.length);
                }, 500);

                // 3. 새로운 텍스트 등장 (1초 후)
                setTimeout(() => {
                    setIsTextAnimating(false);
                }, 1000);

                // 4. 새로운 박스 등장 (1.6초 후 = 1초 + 0.6초)
                setTimeout(() => {
                    setIsBoxAnimating(false);
                }, 1600);
            }, cycleDuration);

            return () => clearInterval(mainInterval);
        }, 4000);

        return () => {
            clearTimeout(initialTimeout);
            clearTimeout(initialBoxTimeout);
            clearTimeout(firstCycleTimeout);
        };
    }, []);

    return (
        <Section1Style>
            {/* 텍스트 영역 */}
            <div className="title-wrap">
                <div className="title-box" isAnimating={isTextAnimating}>
                    <h2>{data[currentSetIndex].title}</h2>
                    <p>{data[currentSetIndex].desc}</p>
                </div>
            </div>

            {/* 박스 영역 */}
            <div className="product-wrap">
                <div className="product-box" isAnimating={isBoxAnimating}>
                    {data[currentSetIndex].product.map((product) => (
                        <div className=".product-box-each" key={product.id}>
                            <img src={product.img} alt={product.name} />

                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section1Style>
    );
}
