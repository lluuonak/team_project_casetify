import React from 'react';
import styled from 'styled-components';
import { SingleCircleStyle } from './style';

const SingleCircle = ({ data }) => {
    return (
        <SingleCircleStyle className="circle-group single">
            <div className="circle">
                <img src={data[0].img} alt={data[0].title} />
                <div className="overlay">
                    <div className="title-text">{data[0].title}</div>
                </div>
            </div>
        </SingleCircleStyle>
    );
};

export default SingleCircle;