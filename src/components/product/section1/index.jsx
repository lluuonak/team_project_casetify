// 기존 코드 유지
import React, { useState } from 'react';
import { Section1Style } from './style';

const images = [
    [
        '../../public/images/product/product-banner1.jpg',
        '../../public/images/product/product-banner2.jpg',
        '../../public/images/product/product-banner3.jpg',
    ],
    [
        '../../public/images/product/product-banner1.jpg',
        '../../public/images/product/product-banner2.jpg',
        '../../public/images/product/product-banner3.jpg',
    ],
    [
        '../../public/images/product/product-banner1.jpg',
        '../../public/images/product/product-banner2.jpg',
        '../../public/images/product/product-banner3.jpg',
    ],
];

const Index = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(null);

    const handleSlideChange = (index) => {
        if (index === currentSlide) return;
        setPrevSlide(currentSlide);
        setCurrentSlide(index);
    };

    return (
        <Section1Style>
            <div className="visual-section">
                {/* 텍스트 영역 기존 코드 유지 */}
                <div className="visual-text">
                    <h2>
                        취향을 담는 <br /> 가장 간단한 방법
                    </h2>
                    <p>
                        복잡하게 고민하지 마세요. <br /> <br />
                        당신의 취향을 그대로 담아낸, <br />
                        가장 손쉬운 선택입니다.
                    </p>
                    <button className="more-btn">VIEW MORE</button>
                </div>

                {/* 슬라이드 영역 */}
                <div className="visual-slider">
                    {images.map((group, index) => {
                        const className = `slide ${index === currentSlide ? 'active' : ''} ${
                            index === prevSlide ? 'exit' : ''
                        }`;

                        return (
                            <div key={index} className={className}>
                                {/* 여기서 .visual-images 래퍼를 추가 */}
                                <div className="visual-images">
                                    <div className="visual-img1">
                                        <img src={group[0]} alt="" />
                                    </div>
                                    <div className="visual-img2">
                                        <img src={group[1]} alt="" />
                                    </div>
                                    <div className="visual-img3">
                                        <img src={group[2]} alt="" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 네비게이션 */}
                <div className="visual-nav">
                    {images.map((_, index) => (
                        <button key={index} onClick={() => handleSlideChange(index)}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </Section1Style>
    );
};

export default Index;
