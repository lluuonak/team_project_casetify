import styled from 'styled-components';

export const Section1Style = styled.section`
    width: 100%;
    height: auto;
    .inner {
        width: 1440px;
        height: auto;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
    }
`;

export const EmptyStyle = styled.div`
    width: 100%;
    height: 259px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-bottom: 200px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    strong {
        color: #fff;
        font-size: 24px;
        font-weight: 400;
    }
    span {
        cursor: pointer;
        width: 180px;
        height: 40px;
        border-radius: 50px;
        border: 1px solid #fff;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const BannerStyle = styled.div`
    width: 1000px;
    height: 387px;
    margin: auto;
`;

export const FillStyle = styled.div`
    margin: auto;
    width: 100%;
    height: auto;
    margin-top: 60px;
    display: flex;
    flex-flow: column;
    gap: 40px;

    .nav-area {
        width: 100%;
        display: flex;
        gap: 40px;
        align-items: center;
        .all {
            cursor: pointer;
            display: flex;
            padding: 8px 30px;
            justify-content: center;
            align-items: center;
            width: auto;
            height: 100%;
            border-radius: 50px;
            border: 1px solid #fff;
            color: #fff;
            font-size: 16px;
            font-weight: 400;
        }
        .del {
            cursor: pointer;
            display: flex;
            padding: 4px 20px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 50px;
            border: 1px solid #888;
            color: #888;
            font-size: 12px;
            font-weight: 400;
        }
    }
    .list {
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: column;
    }
    .total {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 20px;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
    }
    .end-btns {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        margin-bottom: 60px;
        span {
            width: auto;
            height: 30px;
            display: flex;
            padding: 8px 30px;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 16px;
            font-weight: 400;
            border-radius: 50px;
            border: 1px solid #fff;
            cursor: pointer;
        }
    }
`;

export const CartItemStyle = styled.li`
    border-top: 1px solid rgba(255, 255, 255, 0.8);
    display: flex;
    padding: 30px 30px 30px 30px;
    align-items: center;
    gap: 30px;
    align-self: stretch;
    width: 100%;
    height: 220px;
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
    .item {
        width: 1306px;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        .img {
            width: 160px;
            height: 160px;
            border: 1px solid #fff;
            position: relative;
            img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        .info {
            width: 1106px;
            height: 73px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 40px;
            .text {
                width: 761px;
                height: 100%;
                display: flex;
                flex-flow: column;
                gap: 20px;
                strong {
                    display: block;
                    color: #fff;
                    font-size: 24px;
                    font-weight: 500;
                }
                span {
                    display: block;
                    color: #fff;
                    font-size: 20px;
                    font-weight: 400;
                }
            }
            .price {
                display: block;
                color: #fff;
                font-size: 22px;
                font-weight: 500;
            }
            .qty {
                display: flex;
                width: auto;
                height: 30px;
                align-items: center;
                justify-content: center;
                gap: 16px;
                padding: 0 20px;
                border-radius: 20px;
                border: 1px solid #fff;
                color: #fff;
                font-family: Inter;
                font-size: 18px;
                font-weight: 500;
                line-height: 30px; /* 166.667% */
            }
            .del {
                cursor: pointer;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .btn {
                cursor: pointer;
            }
        }
    }
    &:last-child {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
`;
