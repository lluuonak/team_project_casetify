import React from 'react';
import styled from 'styled-components';

const DoubleCircleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 480px;
    flex-shrink: 0;
    
    .circle {
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 230px;
        height: 230px;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            padding: 0 20px;
            letter-spacing: 1px;
            pointer-events: none;
        }
        
        &:hover .overlay {
            opacity: 1;
        }
    }
`;

const DoubleCircle = ({ data }) => {
    return (
        <DoubleCircleWrapper className="circle-group double">
            {data.map((item, index) => (
                <div key={index} className="circle">
                    <img src={item.img} alt={item.title} />
                    <div className="overlay">
                        <div className="title-text">{item.title}</div>
                    </div>
                </div>
            ))}
        </DoubleCircleWrapper>
    );
};

export default DoubleCircle;