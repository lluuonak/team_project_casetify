// 기존 코드 유지
import React, { useEffect, useState } from 'react';
import { Section1Style } from './style';

const slides = [
    {
        title: (
            <>
                취향을 담는 <br />
                가장 간단한 방법
            </>
        ),
        desc: (
            <>
                복잡하게 고민하지 마세요. <br /> <br />
                당신의 취향을 그대로 담아낸, <br />
                가장 손쉬운 선택입니다.
            </>
        ),
    },
    {
        title: (
            <>
                실용과 미학의
                <br />
                완벽한 균형
            </>
        ),
        desc: (
            <>
                기능과디자인을 한 번에. <br />
                <br />
                당신의 생활에 딱 맞춘, <br />
                편리함과 아름다움을 모두 누리세요.
            </>
        ),
    },
    {
        title: (
            <>
                컬러,디자인, 감성을
                <br />
                모두 잡은 라인업
            </>
        ),
        desc: (
            <>
                다채로운 색감과 세련된 디자인 <br />
                <br />
                어떤 스타일에도 자연스럽게 어울리는 <br />
                완성형 케이스입니다.
            </>
        ),
    },
];
const images = [
    [
        '../../public/images/product/product-banner1.jpg',
        '../../public/images/product/product-banner2.jpg',
        '../../public/images/product/product-banner3.jpg',
    ],
    [
        '../../public/images/product/product-banner4.jpg',
        '../../public/images/product/product-banner5.jpg',
        '../../public/images/product/product-banner6.jpg',
    ],
    [
        '../../public/images/product/product-banner7.jpg',
        '../../public/images/product/product-banner8.jpg',
        '../../public/images/product/product-banner9.jpg',
    ],
];

const Index = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(null);
    const slideCount = images.length;

    const handleSlideChange = (index) => {
        if (index === currentSlide) return;
        setPrevSlide(currentSlide);
        setCurrentSlide(index);
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setPrevSlide(currentSlide);
            setCurrentSlide((prev) => (prev + 1) % slideCount);
        }, 5000);

        return () => clearInterval(timer);
    }, [currentSlide, slideCount]);

    return (
        <Section1Style>
            <div className="visual-section">
                {/* 텍스트 영역 */}
                <div className="visual-text">
                    <div className="visual-text-wrapper">
                        {slides.map((slide, index) => {
                            const className = `text-slide ${
                                index === currentSlide ? 'active' : ''
                            } ${index === prevSlide ? 'exit' : ''}`;
                            return (
                                <div key={index} className={className}>
                                    <h2>{slide.title}</h2>
                                    <p>{slide.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                    <button className="more-btn">VIEW MORE</button>
                </div>

                {/* 슬라이드 영역 */}
                <div className="visual-slider">
                    {images.map((group, index) => {
                        const className = `slide ${index === currentSlide ? 'active' : ''} ${
                            index === prevSlide ? 'exit' : ''
                        }`;

                        return (
                            <div key={index} className={`${className} slide-${index}`}>
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
                        <button
                            key={index}
                            className={currentSlide === index ? 'active' : ''}
                            onClick={() => handleSlideChange(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </Section1Style>
    );
};

export default Index;
