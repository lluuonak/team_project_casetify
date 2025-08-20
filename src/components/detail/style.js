import styled from 'styled-components';

export const Section1Style = styled.section`
    height: auto;
    display: flex;
    align-items: center;
    flex-flow: column;
    gap: 80px;
    margin-top: 100px;
    padding-top: 120px;
    .inner {
        width: 1440px;
        height: 640px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .image-area {
            width: 788px;
            height: 640px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left {
                display: flex;
                width: 300px;
                height: 100%;
                flex-flow: column;
                gap: 40px;
                .img {
                    width: 300px;
                    height: 300px;
                    border-radius: 20px;
                    background: #fff;

                    img {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                }
            }
            .right {
                width: 448px;
                height: 100%;
                border-radius: 20px;
                background: #fff;
                position: relative;
                img {
                    width: 538px;
                    height: 538px;
                    display: block;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
        .info-area {
            width: 462px;
            height: 100%;
            display: flex;
            flex-flow: column;
            gap: 60px;
            .top {
                width: 100%;
                height: 242px;
                display: flex;
                flex-flow: column;
                gap: 40px;
                .price {
                    width: 100%;
                    height: 73px;
                    display: flex;
                    flex-flow: column;
                    justify-content: flex-end;
                    gap: 20px;
                    span {
                        display: block;
                        color: #fff;
                        font-size: 20px;
                        font-weight: 400;
                    }
                }
                .context {
                    width: 100%;
                    height: 129px;
                    display: flex;
                    flex-flow: column;
                    gap: 20px;
                    color: #fff;
                    font-size: 16px;
                    font-weight: 400;
                    span {
                        display: block;
                    }
                    .second {
                        white-space: pre-line;
                    }
                }
            }
            .bottom {
                width: 100%;
                height: 336px;
                display: flex;
                flex-flow: column;
                gap: 40px;
                .select {
                    width: 300px;
                    height: 44px;
                    display: flex;
                    padding: 10px 20px;
                    align-items: center;
                    gap: 16px;
                    /* flex: 1 0 0; */
                    border-radius: 50px;
                    border: 1px solid #fff;
                    span {
                        color: #fff;
                        font-size: 16px;
                        font-weight: 500;
                        display: block;
                    }
                    i {
                        display: block;
                        width: 20px;
                        height: 20px;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                .protected {
                    .label {
                        color: #fff;
                        font-size: 20px;
                        font-weight: 600;
                        margin-right: 20px;
                    }
                    span {
                        color: #fff;
                        font-size: 20px;
                        font-weight: 400;
                        margin-right: 60px;
                    }
                }
                .color {
                    width: 100%;
                    height: 30px;
                    display: flex;
                    gap: 30px;
                    align-items: center;
                    .label {
                        color: #fff;
                        font-size: 20px;
                        font-weight: 600;
                        margin-right: 60px;
                    }
                    ul {
                        width: auto;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 30px;
                        li {
                            width: 30px;
                            height: 30px;
                            border-radius: 100%;
                            cursor: pointer;
                        }
                    }
                }

                .buy {
                    width: 100%;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50px;
                    border: 1px solid #ff5b37;
                    color: #ff5b37;
                    text-align: center;
                    font-size: 20px;
                    font-weight: 400;
                    cursor: pointer;
                }
                .fn-btns {
                    width: 100%;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                    color: #fff;
                    font-size: 16px;
                    font-weight: 400;
                    span {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 221px;
                        height: 100%;
                        border-radius: 50px;
                        border: 1px solid #fff;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .features {
        width: 900px;
        height: 198px;
        display: flex;
        flex-flow: column;
        gap: 60px;
        align-items: center;
        margin-bottom: 100px;
        strong {
            display: block;
            color: #fff;
            font-size: 32px;
            font-weight: 600;
        }
        img {
            width: 900px;
            height: 100px;
            display: block;
        }
    }
`;
export const SelectPartialStyle = styled.div`
    width: 300px;
    height: 44px;
    display: flex;
    padding: 10px 20px;
    align-items: center;
    gap: 16px;
    /* flex: 1 0 0; */
    border-radius: 50px;
    border: 1px solid #fff;
    span {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        display: block;
    }
    i {
        display: block;
        width: 20px;
        height: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Section2Style = styled.section`
    width: 100%;
    height: 1208px;
    height: auto;
    display: flex;
    flex-flow: column;
    gap: 100px;
    .inner {
        width: 1440px;
        height: 726px;
        margin: auto;
        display: flex;
        justify-content: center;
        flex-flow: column;
        align-items: center;
        gap: 80px;
        .top {
            width: 1200px;
            height: 39px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .title {
                width: auto;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
                strong {
                    color: #fff;
                    font-family: Inter;
                    font-size: 32px;
                    font-weight: 600;
                }
                span {
                    color: #fff;
                    font-family: Pretendard;
                    font-size: 16px;
                    font-weight: 400;
                }
            }
            i {
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
        }
        .items {
            width: 1200px;
            height: 492px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            li {
                width: 240px;
                height: 100%;
                display: flex;
                flex-flow: column;
                gap: 20px;
                .img {
                    width: 100%;
                    height: 370px;
                    border-radius: 20px;
                    display: block;
                    background-color: #fff;
                    position: relative;
                    img {
                        width: 370px;
                        height: 370px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
                .text-area {
                    width: 100%;
                    height: 102px;
                    display: flex;
                    flex-flow: column;
                    gap: 8px;
                    padding: 0 20px;
                    strong {
                        display: block;
                        width: 200px;
                        height: 48px;
                        color: #fff;
                        text-overflow: ellipsis;
                        white-space: wrap;
                        font-size: 20px;
                        font-weight: 700;
                        line-height: normal;
                    }
                    .price {
                        display: block;
                        width: 66px;
                        height: 46px;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        color: #fff;
                        font-size: 16px;
                        font-weight: 400;
                    }
                }
            }
        }
        .more {
            width: 147px;
            height: 35px;
            border-radius: 50px;
            border: 1px solid #fff;
            color: #fff;
            font-size: 16px;
            font-weight: 400;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .text {
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: #888;
        font-family: Pretendard;
        font-size: 160px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        margin: auto;
        width: 1698px;
        height: 382px;
        color: transparent;
        font-size: 159px;
        margin-bottom: 378px;
    }
`;
