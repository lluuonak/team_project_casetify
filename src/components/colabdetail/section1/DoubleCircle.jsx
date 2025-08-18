import React from 'react';
import styled from 'styled-components';
import { DoubleCircleStyle } from './style';

const DoubleCircle = ({ data }) => {
    return (
        <DoubleCircleStyle className="circle-group double">
            {data.map((item, index) => (
                <div key={index} className="circle">
                    <img src={item.img} alt={item.title} />
                    <div className="overlay">
                        <div className="title-text">{item.title}</div>
                    </div>
                </div>
            ))}
        </DoubleCircleStyle>
    );
};

export default DoubleCircle;
