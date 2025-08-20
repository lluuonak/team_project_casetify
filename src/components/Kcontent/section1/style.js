import styled from 'styled-components';

export const Section1Style = styled.section`
    width: 1920px;
    height: 900px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .kcontent-image.big {
        width: 1920px;
        height: 100%;
    }
    .kcontent-text {
        position: absolute;
        bottom: 5%;
        left: 10%;
        width: 1600px;
        text-align: left;
        color: #fff;
        font-weight: 600;
        z-index: 1;
        h3 {
            font-style: italic;
        }
        h2 {
            text-align: left;
            font-weight: 600;
        }
    }
`;
