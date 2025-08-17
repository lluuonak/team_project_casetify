import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsapData from '../../../assets/colab/gsapData';
import SingleCircle from './SingleCircle';
import DoubleCircle from './DoubleCircle';
import { Section1Style } from './style';

const Section1 = ({ pageData, categoryName }) => {
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const animationId = useRef(null);

    // gsapData에서 해당 카테고리 데이터 가져오기
   // Section1.jsx의 getCategoryData 함수 수정
const getCategoryData = () => {
    console.log('categoryName:', categoryName); // 디버깅용
    console.log('pageData:', pageData); // 디버깅용
    
    // pageData가 있으면 우선 사용
    if (pageData && pageData.length > 0) {
        return pageData;
    }
    
    // categoryName이 undefined인 경우 방어 코드
    if (!categoryName) {
        console.warn('categoryName이 undefined입니다');
        return [];
    }
    
    // 없으면 gsapData에서 가져오기
    const categoryKey = categoryName.toLowerCase();
    console.log('categoryKey:', categoryKey); // 디버깅용
    
    return gsapData[categoryKey] || [];
};

    const displayData = getCategoryData();
    
    const infiniteItems = [...displayData, ...displayData, ...displayData, ...displayData, ...displayData];

    // 자동 슬라이드 애니메이션
    const animate = () => {
        if (!isDragging.current && containerRef.current) {
            const container = containerRef.current;
            const currentTransform = container.style.transform;
            let currentX = currentTransform ? parseFloat(currentTransform.match(/translateX\(([^)]+)px\)/)?.[1] || 0) : 0;
            
            // 새로운 위치 계산
            const newX = currentX - 0.5;
            
            // 실제 컨테이너와 아이템 너비 계산
            const containerWidth = container.scrollWidth;
            const oneSetWidth = containerWidth / 5; // 5배로 복제했으므로
            
            // 양쪽 끝에 도달하면 부드럽게 위치 조정
            if (newX <= -oneSetWidth * 4) {
                // 너무 오른쪽으로 가면 왼쪽으로 이동
                container.style.transform = `translateX(${newX + oneSetWidth * 2}px)`;
            } else if (newX >= -oneSetWidth) {
                // 너무 왼쪽으로 가면 오른쪽으로 이동  
                container.style.transform = `translateX(${newX - oneSetWidth * 2}px)`;
            } else {
                container.style.transform = `translateX(${newX}px)`;
            }
        }
        animationId.current = requestAnimationFrame(animate);
    };

    // 드래그 이벤트 핸들러
    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - containerRef.current.offsetLeft;
        const transform = containerRef.current.style.transform;
        scrollLeft.current = transform ? parseFloat(transform.match(/translateX\(([^)]+)px\)/)?.[1] || 0) : 0;
        containerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        if (e.buttons !== 1) return; // 마우스 버튼이 눌려있을 때만
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
        // 드래그 중이 아닐 때만 애니메이션 멈춤
        if (!isDragging.current) {
            isDragging.current = true;
        }
    };

    const handleMouseLeave = () => {
        // 실제 드래그 중이 아니라면 애니메이션 재개
        if (isDragging.current) {
            isDragging.current = false;
        }
        containerRef.current.style.cursor = 'grab';
    };

    useEffect(() => {
        // 초기 위치를 중간 세트로 설정 (2번째 세트)
        if (containerRef.current) {
            const container = containerRef.current;
            // 컨테이너가 렌더링된 후에 중간 위치로 이동
            setTimeout(() => {
                if (container.scrollWidth > 0) {
                    const oneSetWidth = container.scrollWidth / 5; // 5배 복제
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
            <div className="container">
                <h1 className="title">{categoryName.toUpperCase()}</h1>
                
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