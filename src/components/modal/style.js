import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9998;
`;

export const ModalStyle = styled.div`
    width: 380px;
    height: 300px;
    border-radius: 20px;
    background: #1a1a1a;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .inner {
        width: 275px;
        height: auto;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 50px;
        strong {
            color: #fff;
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
        }
        span {
            color: #fff;
            text-align: center;
            font-size: 16px;
            font-weight: 400;
        }
        a {
            width: 200px;
            height: 40px;
            border-radius: 50px;
            background: rgba(136, 136, 136, 0.2);
            color: rgba(255, 255, 255, 0.3);
            font-size: 16px;
            font-weight: 600;
            line-height: 30px; /* 187.5% */
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .close {
        width: 20px;
        height: 20px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 20px;
        top: 20px;
    }
`;
