import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    Section1Style,
    BackgroundSlide,
    TextContent,
    ProductGrid,
    ProductCardStyle,
    ProductImage,
} from './style';
import { useNavigate } from 'react-router-dom';

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

    const navigator = useNavigate();
    const onClickHandler = () => {
        navigator('/detail');
    };
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
                    <TextContent active={!isTransitioning}>
                        <h1>{colabVisualData[currentSlide]?.title}</h1>
                        <span>{colabVisualData[currentSlide]?.desc}</span>
                        <span>VIEW MORE</span>
                    </TextContent>
                    <ProductGrid active={!isTransitioning}>
                        {newProduct[currentSlide]?.product.map((product, index) => (
                            <ProductCardStyle key={index} onClick={onClickHandler}>
                                <div className="img-bg">
                                    <img src={product.img} alt={product.title} />
                                </div>
                                {/* <ProductImage img={product.img} /> */}
                                <div className="text">
                                    <h4>{product.name}</h4>
                                    <span>₩{product.price.toLocaleString()}</span>
                                </div>
                            </ProductCardStyle>
                        ))}
                    </ProductGrid>
                </div>
                <div className="overlay"></div>
            </div>
        </Section1Style>
    );
};

export default Section1;
