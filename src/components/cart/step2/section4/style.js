import styled from 'styled-components';

export const Section4Style = styled.section`
    padding: 40px 0;
    width: 100%;
    height: 670px;
    .inner {
        width: 1440px;
        height: 670px;
        margin: auto;
        display: flex;
        flex-flow: column;
        gap: 40px;

        h3 {
            color: #fff;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            height: 29px;
        }
        .payment-method {
            border-top: 1px solid rgba(255, 255, 255, 0.8);
            width: 100%;
            height: 526px;
            padding: 40px 60px;
            display: flex;
            flex-flow: column;
            gap: 40px;
            align-items: center;
            .part {
                width: 1320px;
                height: 64px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                input[type='radio'] {
                    appearance: none; /* 기본 동그라미 없애기 */
                    -webkit-appearance: none; /* 사파리 대응 */
                    -moz-appearance: none; /* 파이어폭스 대응 */
                    margin-right: 20px;
                    width: 20px; /* 크기 조절 */
                    height: 20px;
                    border: 2px solid #fff; /* 바깥 원 테두리 색 */
                    background-color: #fff;
                    border-radius: 50%;
                    display: inline-block;
                    position: relative;
                    cursor: pointer;
                    &:checked::after {
                        content: '';
                        width: 12px;
                        height: 12px;
                        background: #ff5b37;
                        border-radius: 50%;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
                label {
                    color: #fff;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
            }
            .h-35 {
                width: 1320px;
                height: 35px;
                display: flex;
                align-items: center;
                select {
                    width: 400px;
                    height: 35px;
                    appearance: none; /* 기본 브라우저 화살표 제거 */
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    border-radius: 10px;
                    background: transparent;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 16px;
                    cursor: pointer;
                    padding: 0 30px;
                }
                i {
                    display: flex;
                    width: 24px;
                    height: 24px;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    top: 38%;
                    right: 58px;
                    transform: translateY(-50%);
                }
                span {
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 30px; /* 187.5% */
                }
                .part {
                    width: 594px;
                    height: 100%;
                    display: flex;
                    gap: 40px;
                    label {
                        display: block;
                        color: #fff;
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        width: 73px;
                        height: 24px;
                    }
                    input {
                        border-radius: 10px;
                        border: 1px solid rgba(255, 255, 255, 0.5);
                        outline: none;
                        height: 35px;
                        background-color: transparent;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        width: 484px;
                        color: rgba(255, 255, 255, 0.5);
                        padding-left: 30px;
                        &::placeholder {
                        }
                    }
                }
            }

            .last {
                width: 1320px;
                height: 30px;
                display: flex;
                align-items: center;
                input {
                    margin: 0;
                    appearance: none; /* 기본 동그라미 없애기 */
                    -webkit-appearance: none; /* 사파리 대응 */
                    -moz-appearance: none; /* 파이어폭스 대응 */
                    margin-right: 20px;
                    width: 20px; /* 크기 조절 */
                    height: 20px;
                    border: 2px solid #fff; /* 바깥 원 테두리 색 */
                    background-color: #fff;
                    border-radius: 50%;
                    display: inline-block;
                    position: relative;
                    cursor: pointer;
                    &:checked::after {
                        content: '';
                        width: 12px;
                        height: 12px;
                        background: #ff5b37;
                        border-radius: 50%;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
                label {
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 30px; /* 187.5% */
                }
            }

            .agreement {
                width: 1320px;
                height: 122px;
                display: flex;
                flex-flow: column;
                align-items: flex-end;
                gap: 40px;
                input[type='checkbox'] {
                    appearance: none; /* 브라우저 기본 체크박스 제거 */
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    width: 24px;
                    height: 24px;
                    border: 2px solid #888; /* 회색 테두리 */
                    background: transparent; /* 배경 투명 */
                    cursor: pointer;
                    display: inline-block;
                    position: relative;
                    &:checked {
                        border-color: #888; /* 테두리는 그대로 */
                        &::after {
                            content: '✔'; /* 체크 모양 */
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%) scale(1.1);
                            font-size: 18px;
                            color: #ff4a2a; /* 주황색 체크 */
                        }
                    }
                }
                .all {
                    width: 134px;
                    height: 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    label {
                        color: #fff;
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                    }
                }
                .agree-section {
                    width: 416px;
                    height: 58px;
                    display: flex;
                    flex-flow: column;
                    justify-content: space-between;
                    .part {
                        width: 100%;
                        height: 19px;
                        display: flex;
                        justify-content: flex-end;
                        gap: 40px;
                        label {
                            color: #fff;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: normal;
                        }
                        input[type='checkbox'] {
                            appearance: none; /* 브라우저 기본 체크박스 제거 */
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            width: 19px;
                            height: 19px;
                        }
                    }
                }
            }
        }
    }
`;
