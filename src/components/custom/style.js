import styled from 'styled-components';

export const CustomStyle = styled.section`
    width: 1200px;
    height: 800px;
    border-radius: 20px;
    background: #1a1a1a;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    z-index: 1001;
    overflow: hidden;
    .sample-image {
        width: 624px;
        .custom-image {
            margin-left: 134px;
            margin-bottom: 60px;
            /* pointer-events: none; */
        }
        .btns {
            display: flex;
            gap: 40px;
            justify-content: center;
            align-items: center;
            .btn {
                width: 103px;
                padding: 11px 0;
                height: 41px;
                border-radius: 50px;
                background: rgba(248, 249, 250, 0.2);
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                cursor: pointer;
                img {
                    width: 16px;
                    height: 16px;
                }
                span {
                }
            }
        }
    }
    .settings-wrap {
        width: 576px;
        height: 800px;
        border-radius: 20px;
        box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .settings {
            .setup {
                display: flex;
                box-sizing: border-box;
                padding-bottom: 10px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                margin-bottom: 20px;
                width: 500px;
                h6 {
                    width: 130px;
                    margin-top: 10px;
                }
                ul {
                    li {
                        cursor: pointer;

                        &:hover .img-bg {
                            filter: drop-shadow(0 0 6px #fff);
                        }
                    }
                }
            }

            ul {
                display: flex;
                gap: 40px;
                li {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 6px;
                    .img-bg {
                        width: 50px;
                        height: 50px;
                        border-radius: 100%;
                        background: #fff;
                        overflow: hidden;
                        img {
                        }
                    }
                    span {
                    }
                }
            }
            .model {
                li {
                    &:first-child {
                        img {
                            transform: translate(10px, 5px);
                        }
                    }
                    &:last-child {
                        img {
                            transform: translate(5px, 22px);
                        }
                    }
                }
            }
            .font-color-wrap {
                margin-bottom: 20px;
                width: 500px;
                h6 {
                    margin-bottom: 20px;
                }
                .font-color {
                    gap: 30px;
                    box-sizing: border-box;
                    padding-left: 30px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                    li {
                        width: 24px;
                        height: 24px;
                        border-radius: 100%;
                        border: 1px solid #ccc;
                        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25) inset;

                        &:nth-child(1) {
                            box-shadow: none;
                            background-color: #ffffff;
                            background-image: url('../images/spoid.svg');
                            background-repeat: no-repeat;
                            background-position: 50% 50%;
                        }
                        &:nth-child(2) {
                            background: #1c1c1c;
                        }
                        &:nth-child(3) {
                            background: #f6f6f6;
                        }
                        &:nth-child(4) {
                            background: #d95645;
                        }
                        &:nth-child(5) {
                            background: #d86c4b;
                        }
                        &:nth-child(6) {
                            background: #edac60;
                        }
                        &:nth-child(7) {
                            background: #7a805d;
                        }
                        &:nth-child(8) {
                            background: #88c6d2;
                        }
                        &:nth-child(9) {
                            background: #b9a6c8;
                        }
                    }
                }
            }
            .text-wrap {
                border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                width: 500px;
                position: relative;
                h6 {
                    margin-bottom: 20px;
                }

                input {
                    width: 440px;
                    height: 38px;
                    border-radius: 10px;
                    border: 1px solid rgba(136, 136, 136, 0.53);
                    background-color: transparent;
                    margin-left: 30px;
                    margin-bottom: 20px;
                    color: rgba(136, 136, 136, 0.7);
                    font-size: 12px;
                    font-weight: 500;
                    text-indent: 20px;
                }
                .char-count {
                    font-weight: 400;
                    font-size: 12px;
                    color: rgba(136, 136, 136, 0.7);
                    position: absolute;
                    right: 55px;
                    top: 56px;
                    span {
                    }
                }
            }
        }
        .price {
            text-align: right;
            box-sizing: border-box;
            padding: 30px 10px;
            width: 500px;
            strong {
                font-size: 20px;
                font-weight: 600;
                color: #fff;
            }
        }
        .buying {
            display: flex;
            padding: 8px 30px;
            justify-content: center;
            align-items: center;
            gap: 30px;
            button {
                border-radius: 50px;
                background: transparent;
                width: 200px;
                height: 40px;
                &:first-child {
                    border: 1px solid #fff;
                    color: #fff;
                    font-size: 16px;
                }
                &:last-child {
                    border: 1px solid #ff5b37;
                    color: #ff5b37;
                    font-size: 18px;
                }
            }
        }
    }
    .close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }
`;
