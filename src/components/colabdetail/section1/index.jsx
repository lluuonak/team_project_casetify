import React, { useState } from 'react';
import styled from 'styled-components';

const Section1Style = styled.section`
    height: 100vh;
    /* background: linear-gradient(135deg, #1a1a2e, #16213e); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;

    h2 {
        font-size: 3rem;
        font-weight: 500;
        color: #fff;
        text-align: center;
        margin-bottom: 4rem;
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        letter-spacing: 2px;
        letter-spacing: 0;
    }

    .slider-container {
        position: relative;
        width: 100%;
        height: 400px;
        overflow: hidden;
        mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
        -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
    }

    .slider-track {
        display: flex;
        width: calc(320px * ${(props) => props.totalItems});
        animation: scroll 20s linear infinite;
        gap: 10px;

        &.paused {
            animation-play-state: paused;
        }
    }

    .slide {
        flex-shrink: 0;
        width: 400px;
        height: 400px;
        position: relative;
        cursor: pointer;
        transition: transform 0.3s ease;

        &:hover .slide-image {
            transform: translateY(-10px) scale(1.05);
            z-index: 10;
        }
    }

    .slide-content {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 100%;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .slide-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.4s ease;
    }

    .slide-info {
        position: absolute;
        height: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 20px;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
        color: white;
        transform: translateY(50px);
        opacity: 0;
        transition: all 0.4s ease;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slide-title {
        font-size: 1.4rem;
        font-weight: 600;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .slide:hover .slide-image {
        filter: grayscale(0%) brightness(1);
        transform: scale(1.1);
    }

    .slide:hover .slide-info {
        transform: translateY(0);
        opacity: 1;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-320px * ${(props) => props.itemCount}));
        }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
            margin-bottom: 2rem;
        }

        .slider-container {
            height: 300px;
        }

        .slide {
            width: 250px;
            height: 300px;
        }

        .controls {
            display: none;
        }
    }
`;

const Section1 = ({ data = demoData }) => {
    const { id, title, category } = data;
    const [isPaused, setIsPaused] = useState(false);
    const [animationSpeed, setAnimationSpeed] = useState(20);

    // 무한 루프를 위해 아이템을 3번 복제
    const infiniteItems = [...category, ...category];

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const changeSpeed = (speed) => {
        setAnimationSpeed(speed);
    };

    return (
        <Section1Style totalItems={infiniteItems.length} itemCount={category.length}>
            <i className="prev-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <g fill="none" fill-rule="evenodd">
                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                            fill="#fff"
                            d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"
                        />
                    </g>
                </svg>
            </i>
            <h2>{title.toUpperCase()}</h2>
            <div className="slider-container">
                <div
                    className={`slider-track ${isPaused ? 'paused' : ''}`}
                    style={{ animationDuration: `${animationSpeed}s` }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {infiniteItems.map((item, index) => (
                        item.imgCount === 1 ? <A data={item.data}/> : item.id === 2 ? <B/> : <C/>
                        // <div key={`${item.id}-${index}`} className="slide ">
                            
                        //     <div className="slide-content">
                        //         <img src={item.img} alt={item.title} className="slide-image" />
                        // img에 onMouseEnter 효과 개별 적용
                        //         <div className="slide-info">
                        //             <h3 className="slide-title">{item.title}</h3>
                        //         </div>
                        //     </div>
                        // </div>
                    ))}
                </div>
            </div>
        </Section1Style>
    );
};

export default Section1;
