import styled from 'styled-components';

export const Section1Style = styled.div`
    width: 100%;
    .visual-container {
        position: relative;
        width: 100%;
        height: 600px;
        overflow: hidden;
    }
    .bg-slide {
    }
    .content-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10;
        padding: 0 20px;
        .text {
            text-align: center;
            color: white;
            margin-bottom: 60px;
            opacity: ${(props) => (props.active ? 1 : 0)};
            transform: ${(props) => (props.active ? 'translateY(0)' : 'translateY(50px)')};
            transition: all 1s ease-out;
            h1 {
                font-size: 48px;
                font-weight: bold;
                margin-bottom: 16px;
                letter-spacing: 2px;
            }
            p {
                font-size: 18px;
                opacity: 0.9;
                max-width: 600px;
                line-height: 1.6;
                margin: 0;
            }
        }
    }
`;
