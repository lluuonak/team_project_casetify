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
export const JoinStyle = styled.div`
    width: 540px;
    height: 741px;
    border-radius: 50px;
    background: #1a1a1a;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;

    .react-tooltip-arrow {
        left: 2px !important;
        top: -4px !important;
    }
    .inner {
        width: 500px;
        height: 621px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
        .logo {
            width: 200px;
            height: 70px;
            img {
                width: 100%;
                height: 100%;
                display: block;
            }
        }
        .text-area {
            width: 460px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
            strong {
                color: #fff;
                text-align: center;
                font-size: 20px;
                font-weight: 600;
            }
            span {
                color: #fff;
                text-align: center;
                font-size: 16px;
                font-weight: 400;
            }
        }
        form {
            width: 460px;
            display: flex;
            flex-flow: column;
            align-items: center;
            gap: 40px;
            input {
                width: 360px;
                height: 40px;
                padding-left: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                color: rgba(136, 136, 136, 0.7);
                border: 1px solid rgba(136, 136, 136, 0.53);
                background-color: #1a1a1a;
                color: #fff;
                font-size: 14px;
                font-weight: 500;
                box-sizing: border-box;
                &::placeholder {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: rgba(136, 136, 136, 0.7);
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: -0.5px;
                }
                &:focus {
                    outline: none;
                    border: 1px solid #fff;
                }
            }
            .birth {
                width: 369px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 30px;
                color: rgba(136, 136, 136, 0.7);
                font-size: 14px;
                font-weight: 500;
                select {
                    background-color: inherit;
                    border-radius: 4px;
                    border: 1px solid rgba(136, 136, 136, 0.53);
                    display: flex;
                    justify-content: space-between;
                    padding: 0 10px;
                    align-items: center;
                    height: 30px;
                    color: rgba(136, 136, 136, 0.7);
                    font-size: 14px;
                    font-weight: 500;
                    appearance: none; /* 기본 화살표 제거 */
                    -webkit-appearance: none; /* 사파리, 크롬 */
                    -moz-appearance: none; /* 파이어폭스 */
                    background: #1a1a1a url('/login/mingcute_right-line.svg') no-repeat right 10px
                        center; /* 화살표 이미지 */
                    outline: none;
                }
                .year {
                    width: 100px;
                }
                .month {
                    width: 60px;
                }
                .day {
                    width: 60px;
                }
            }
        }
        .join-btn {
            width: 280px;
            height: 50px;
            border-radius: 20px;
            background: rgba(136, 136, 136, 0.2);
            color: rgba(255, 255, 255, 0.3);
            font-size: 18px;
            font-weight: 600;
            line-height: 50px; /* 125% */
            text-transform: uppercase;
            box-sizing: border-box;
            &.active {
                border: 1px solid #fff;
                color: #fff;
                background-color: #1a1a1a;
            }
        }
    }
    .close {
        width: 30px;
        height: 30px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 40px;
        top: 40px;
    }
`;

export const LoginStyle = styled.div`
    width: 450px;
    height: 691px;
    border-radius: 50px;
    background: #1a1a1a;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    .inner {
        width: 410px;
        height: 571px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        .logo {
            width: 200px;
            height: 70px;
            img {
                width: 100%;
                height: 100%;
                display: block;
            }
        }

        form {
            width: 300px;
            height: auto;
            display: flex;
            flex-flow: column;
            gap: 20px;
            .input-area {
                width: 100%;
                height: auto;
                display: flex;
                justify-content: center;
                flex-flow: column;
                label {
                    color: #fff;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 30px; /* 150% */
                    padding-left: 20px;
                    margin-bottom: 12px;
                }
                input {
                    width: 300px;
                    height: 40px;
                    padding-left: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    border: 1px solid rgba(136, 136, 136, 0.53);
                    background-color: #1a1a1a;
                    color: #fff;
                    font-size: 16px;
                    font-weight: 500;
                    box-sizing: border-box;

                    &::placeholder {
                        color: rgba(136, 136, 136, 0.7);
                        font-size: 14px;
                        font-weight: 500;
                    }
                    &:focus {
                        outline: none;
                        border: 1px solid #fff;
                    }
                }
                span {
                    display: block;
                    margin-top: 10px;
                    padding-left: 10px;
                    color: #ff5b37;
                    font-size: 16px;
                    font-weight: 500;
                }
            }
        }
    }
    .login-btn {
        width: 280px;
        height: 50px;
        border-radius: 20px;
        background: rgba(136, 136, 136, 0.2);
        color: rgba(255, 255, 255, 0.3);
        font-size: 18px;
        font-weight: 600;
        line-height: 50px; /* 125% */
        text-transform: uppercase;
        box-sizing: border-box;
        &.active {
            border: 1px solid #fff;
            color: #fff;
            background-color: #1a1a1a;
        }
    }
    .login-nav {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        li {
            width: 130px;
            height: 100%;
            position: relative;
            a {
                display: inline-block;
                width: 100%;
                height: 100%;
                text-align: center;
                color: #fff;
                font-size: 16px;
                font-weight: 400;
                line-height: 30px; /* 187.5% */
            }
            &::after {
                content: '';
                width: 2px;
                height: 20px;
                background: #474747;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            &:last-child {
                &::after {
                    content: none;
                }
            }
        }
    }
    .sns-login {
        width: 100%;
        height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        a {
            width: 21px;
            height: 21px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .close {
        width: 30px;
        height: 30px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 40px;
        top: 40px;
    }
`;
