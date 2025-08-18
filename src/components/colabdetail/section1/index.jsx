import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsapData from '../../../assets/colab/gsapData';
import SingleCircle from './SingleCircle';
import DoubleCircle from './DoubleCircle';
import { Section1Style } from './style';
// import BeforeIcon from '../../icons/BeforeIcon';

const Section1 = ({ pageData, categoryName }) => {
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const animationId = useRef(null);

    const getCategoryData = () => {
        if (pageData && pageData.length > 0) {
            return pageData;
        }

        if (!categoryName) {
            console.warn('categoryName이 undefined입니다');
            return [];
        }

        const categoryKey = categoryName.toLowerCase();

        return gsapData[categoryKey] || [];
    };

    const displayData = getCategoryData();

    const infiniteItems = [
        ...displayData,
        ...displayData,
        ...displayData,
        ...displayData,
        ...displayData,
    ];

    const animate = () => {
        if (!isDragging.current && containerRef.current) {
            const container = containerRef.current;
            const currentTransform = container.style.transform;
            let currentX = currentTransform
                ? parseFloat(currentTransform.match(/translateX\(([^)]+)px\)/)?.[1] || 0)
                : 0;

            const newX = currentX - 0.5;

            const containerWidth = container.scrollWidth;
            const oneSetWidth = containerWidth / 5;

            if (newX <= -oneSetWidth * 4) {
                container.style.transform = `translateX(${newX + oneSetWidth * 2}px)`;
            } else if (newX >= -oneSetWidth) {
                container.style.transform = `translateX(${newX - oneSetWidth * 2}px)`;
            } else {
                container.style.transform = `translateX(${newX}px)`;
            }
        }
        animationId.current = requestAnimationFrame(animate);
    };

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - containerRef.current.offsetLeft;
        const transform = containerRef.current.style.transform;
        scrollLeft.current = transform
            ? parseFloat(transform.match(/translateX\(([^)]+)px\)/)?.[1] || 0)
            : 0;
        containerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        if (e.buttons !== 1) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        const newX = scrollLeft.current + walk;
        containerRef.current.style.transform = `translateX(${newX}px)`;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        containerRef.current.style.cursor = 'grab';
    };

    const handleMouseEnter = () => {
        if (!isDragging.current) {
            isDragging.current = true;
        }
    };

    const handleMouseLeave = () => {
        if (isDragging.current) {
            isDragging.current = false;
        }
        containerRef.current.style.cursor = 'grab';
    };

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            setTimeout(() => {
                if (container.scrollWidth > 0) {
                    const oneSetWidth = container.scrollWidth / 5;
                    container.style.transform = `translateX(-${oneSetWidth * 2}px)`; // 3번째 세트에서 시작
                }
            }, 50);
        }

        animationId.current = requestAnimationFrame(animate);

        return () => {
            if (animationId.current) {
                cancelAnimationFrame(animationId.current);
            }
        };
    }, []);

    return (
        <Section1Style>
            {/* <BeforeIcon /> */}
            <div className="container">
                <h2 className="title">{categoryName.toUpperCase()}</h2>

                <div
                    className="circles-wrapper"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        ref={containerRef}
                        className="circles-container"
                        style={{ transform: 'translateX(0px)' }}
                    >
                        {infiniteItems.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.imgCount === 1 ? (
                                    <SingleCircle data={item.data} />
                                ) : (
                                    <DoubleCircle data={item.data} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </Section1Style>
    );
};

export default Section1;
