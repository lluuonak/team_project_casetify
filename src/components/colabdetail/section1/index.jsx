import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Section1Style = styled.section`
    background: #000;
    min-height: 100vh;
    padding: 60px 0;
    color: white;
    
    .container {
        margin: 0 auto;
        padding: 0 20px;
    }
    
    .title {
        text-align: center;
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 80px;
        letter-spacing: 8px;
    }
    
    .circles-wrapper {
        height: 480px;
        overflow: hidden;
        margin-bottom: 60px;
        cursor: grab;
        
        &:active {
            cursor: grabbing;
        }
    }
    
    .circles-container {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 100%;
        will-change: transform;
        user-select: none;
    }
    
    .circle-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        height: 480px;
        flex-shrink: 0;
        
        &.single {
            justify-content: center;
        }
        
        &.double {
            justify-content: center;
        }
    }
    
    .circle {
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.3s ease;
            pointer-events: none;
        }
        
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 2;
        }
        
        .title-text {
            color: white;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            padding: 0 20px;
            letter-spacing: 1px;
            pointer-events: none;
        }
    }
    
    .circle.large {
        width: 480px;
        height: 480px;
    }
    
    .circle.small {
        width: 230px;
        height: 230px;
    }
    
    .circle.small .title-text {
        font-size: 14px;
    }
    
    .circle:hover .overlay {
        opacity: 1;
    }
    
    .divider {
        width: 300px;
        height: 2px;
        background: white;
        margin: 0 auto 40px;
    }
`;

const InfiniteSlider = ({ pageData, categoryName = 'ANIMATION' }) => {
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const animationId = useRef(null);

    // 샘플 데이터 (실제로는 pageData 사용)
    const sampleData = [
        { imgCount: 1, data: [{ title: '에반게리온', img: 'https://picsum.photos/480/480?random=1'}] },
        { imgCount: 2, data: [
            { title: '드래곤볼 Z', img: 'https://picsum.photos/230/230?random=2' }, 
            { title: '주술회전', img: 'https://picsum.photos/230/230?random=3' }
        ]},
        { imgCount: 1, data: [{ title: '사카모토 데이즈', img: 'https://picsum.photos/480/480?random=4' }] },
        { imgCount: 1, data: [{ title: '기동전사 건담', img: 'https://picsum.photos/480/480?random=5' }] },
        { imgCount: 2, data: [
            { title: '원피스', img: 'https://picsum.photos/230/230?random=6'}, 
            { title: '나루토', img: 'https://picsum.photos/230/230?random=7'}
        ]},
        { imgCount: 1, data: [{ title: '도라에몽', img: 'https://picsum.photos/480/480?random=8' }] },
    ];

    const displayData = pageData || sampleData;
    
    // 무한 슬라이드를 위해 데이터를 3배로 복제
    const infiniteItems = [...displayData, ...displayData, ...displayData];

    // 자동 슬라이드 애니메이션
    const animate = () => {
        if (!isDragging.current && containerRef.current) {
            const container = containerRef.current;
            const currentTransform = container.style.transform;
            const currentX = currentTransform ? parseFloat(currentTransform.match(/translateX\(([^)]+)px\)/)?.[1] || 0) : 0;
            
            // 한 세트만큼 이동했으면 처음 위치로 리셋
            const itemWidth = 490; // 원 크기 + gap
            const setWidth = displayData.length * itemWidth;
            
            if (Math.abs(currentX) >= setWidth) {
                container.style.transform = 'translateX(0px)';
            } else {
                container.style.transform = `translateX(${currentX - 0.5}px)`;
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

    const handleMouseLeave = () => {
        isDragging.current = false;
        containerRef.current.style.cursor = 'grab';
    };

    useEffect(() => {
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
                    onMouseLeave={handleMouseLeave}
                >
                    <div 
                        ref={containerRef}
                        className="circles-container"
                        style={{ transform: 'translateX(0px)' }}
                    >
                        {infiniteItems.map((item, index) => (
                            <div 
                                key={index} 
                                className={`circle-group ${item.imgCount === 1 ? 'single' : 'double'}`}
                            >
                                {item.imgCount === 1 ? (
                                    // SingleCircle 컴포넌트 내용
                                    <div className="circle large">
                                        <img src={item.data[0].img} alt={item.data[0].title} />
                                        <div className="overlay">
                                            <div className="title-text">{item.data[0].title}</div>
                                        </div>
                                    </div>
                                ) : (
                                    // DoubleCircle 컴포넌트 내용
                                    item.data.map((dataItem, dataIndex) => (
                                        <div key={dataIndex} className="circle small">
                                            <img src={dataItem.img} alt={dataItem.title} />
                                            <div className="overlay">
                                                <div className="title-text">{dataItem.title}</div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="divider"></div>
            </div>
        </Section1Style>
    );
};

export default InfiniteSlider;