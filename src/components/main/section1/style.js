import styled from 'styled-components';

export const Section1Style = styled.section`
    position: relative;
    .animation-text {
        width: 1150px;
        height: 1150px;
        position: absolute;
        top: 34%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url('/images/section1/visual_1.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .big-img {
        position: absolute;
        top: 34%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1000px;
        height: 1000px;
        background-image: url('/images/section1/section_main_model.png');
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 500px;
    }
    strong {
        position: absolute;
        top: 31%;
        left: 4%;
        transform: translate(-10%, -50%);
        color: #fff;
        font-size: 80px;
        font-weight: 800;
        line-height: 80px; /* 100% */
        letter-spacing: 4px;
    }
    span {
        position: absolute;
        top: 33%;
        right: 11px;

        transform: translate(-10%, -50%);
        color: #fff;
        font-size: 48px;
        font-weight: 700;
    }
`;
