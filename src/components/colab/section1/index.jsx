import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Section1Style } from './style';
import { useSelector } from 'react-redux';

const BackgroundSlide = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(${(props) => props.bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: opacity 1.2s ease-in-out;
    z-index: 1;
`;

const TextContent = styled.div`
    text-align: center;
    color: white;
    margin-bottom: 60px;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transform: ${(props) => (props.active ? 'translateY(0)' : 'translateY(50px)')};
    transition: all 1s ease-out;
`;

const Title = styled.h1`
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 16px;
    letter-spacing: 2px;
`;

const Description = styled.p`
    font-size: 18px;
    opacity: 0.9;
    max-width: 600px;
    line-height: 1.6;
    margin: 0;
`;

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 800px;
    width: 100%;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transform: ${(props) => (props.active ? 'translateY(0)' : 'translateY(50px)')};
    transition: all 1s ease-out 0.2s;
`;

const ProductCard = styled.div`
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    padding: 16px;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
    }
`;

const ProductImage = styled.div`
    width: 100%;
    height: 120px;
    background: url(${(props) => props.img}) no-repeat center;
    background-size: cover;
    border-radius: 8px;
    margin-bottom: 12px;
`;

const ProductName = styled.h4`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
    line-height: 1.3;
`;

const ProductPrice = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #000;
    margin: 0;
`;

const Section1 = () => {
    const { newProduct, colabVisualData } = useSelector((state) => state.colab);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);

            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % colabVisualData.length);
                setIsTransitioning(false);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, [colabVisualData.length]);

    return (
        <Section1Style>
            <div className="visual-container">
                {colabVisualData.map((item, index) => (
                    <BackgroundSlide
                        key={item.id}
                        bgImage={item.img}
                        active={index === currentSlide}
                    />
                ))}

                <div className="content-wrap">
                    <div className="text" active={!isTransitioning}>
                        <Title>{colabVisualData[currentSlide]?.title}</Title>
                        <Description>{colabVisualData[currentSlide]?.desc}</Description>
                    </div>

                    <ProductGrid active={!isTransitioning}>
                        {newProduct[currentSlide]?.product.map((product, index) => (
                            <ProductCard key={index}>
                                <ProductImage img={product.img} />
                                <ProductName>{product.name}</ProductName>
                                <ProductPrice>₩{product.price}</ProductPrice>
                            </ProductCard>
                        ))}
                    </ProductGrid>
                </div>
            </div>
        </Section1Style>
    );
};

export default Section1;
