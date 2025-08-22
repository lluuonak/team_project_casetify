import styled from 'styled-components';

export const Section1Style = styled.section`
    width: 100%;
    height: auto;
    padding-top: 200px;
    .inner {
        width: 1440px;
        height: 1011px;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        gap: 80px;
        position: relative;
        .info-area {
            width: 100%;
            height: 885px;
            display: flex;
            flex-flow: column;
            .title {
                width: 100%;
                height: 75px;
                display: flex;
                align-items: center;
                flex-flow: column;
                gap: 20px;
                color: #fff;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                h3 {
                    font-size: 26px;
                }
                h4 {
                    font-size: 20px;
                }
            }
            .btn-area {
                width: 100%;
                height: 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 40px;
                span {
                    width: 180px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    border-radius: 50px;
                    border: 1px solid #fff;
                    color: #fff;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
            }
            .oder-area {
                width: 100%;
                height: 690px;
                display: flex;
                flex-flow: column;
                border-top: 1px solid #fff;
                .order-info {
                    width: 100%;
                    height: 102px;
                    display: flex;
                    align-items: center;
                    gap: 60px;
                    color: #fff;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    .order-no {
                        width: auto;
                        height: 24px;
                        display: flex;
                        align-items: center;
                        gap: 30px;
                    }
                }
                .order-item {
                    border-left: 3px solid #fff;
                    width: 100%;
                    height: 200px;
                    padding: 20px 50px 20px 90px;
                    display: flex;
                    align-items: center;
                    .img {
                        width: 160px;
                        height: 160px;
                        border: 1px solid #fff;
                        position: relative;
                        background-color: #fff;
                        margin-right: 40px;
                        img {
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        }
                    }
                    .item-info {
                        width: 1100px;
                        height: 29px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        .name {
                            display: block;
                            color: #fff;
                            font-size: 20px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: normal;
                        }
                        .price {
                            display: block;
                            color: #fff;
                            font-size: 24px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: normal;
                        }
                    }
                }
                .order-info-detail {
                    width: 397px;
                    height: 165px;
                    position: absolute;
                    left: 90px;
                    bottom: 145px;
                    display: flex;
                    flex-flow: column;
                    gap: 20px;
                    strong {
                        width: 100px;
                        height: 100%;
                        color: #fff;
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                    }
                    span {
                        color: #fff;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                    }
                    .part {
                        width: 100%;
                        height: 24px;
                        display: flex;
                        gap: 30px;
                    }
                    .third {
                        height: 77px;
                        .user-info {
                            width: 267px;
                            height: 100%;
                            display: flex;
                            flex-flow: column;
                            gap: 10px;
                            span {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
`;
