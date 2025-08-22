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

export const OrderItemInfoStyle = styled.div`
    margin-top: 60px;
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column;
    gap: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    .top {
        width: 100%;
        height: 29px;
        color: #fff;
        font-size: 24px;
        font-weight: 400;
    }
    .bottom {
        padding-top: 40px;
        padding-bottom: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.8);

        display: flex;
        align-items: center;
        width: 100%;
        height: auto;
    }
`;

export const ItemStyle = styled.li`
    width: 100%;
    height: auto;
    .title {
        display: flex;
        gap: 30px;
        margin-bottom: 20px;
        span {
            display: block;
            color: #fff;
            font-size: 20px;
            font-weight: 400;
        }
    }
    .info {
        width: 100%;
        height: 200px;
        padding: 20px 50px 20px 90px;
        border-left: 3px solid #fff;

        .inner {
            width: 1300px;
            height: 160px;
            display: flex;
            flex-flow: row;
            justify-content: center;
            align-items: center;
            gap: 40px;
            .img {
                width: 160px;
                height: 160px;
                border: 1px solid #fff;
                background: #fff;
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
            .name-price {
                width: 1020px;
                height: 29px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .name {
                    width: auto;
                    height: 29px;
                    color: #fff;
                    font-size: 20px;
                    font-weight: 400;
                }
                .price {
                    width: auto;
                    height: 29px;
                    color: #fff;
                    font-size: 24px;
                    font-weight: 400;
                }
            }
            .toggle-icon {
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: 0.2s;
                &.open {
                    transform: rotate(180deg);
                }
            }
        }
    }
`;

export const OtherOrderItemsStyle = styled.ul`
    margin-top: 20px;
    width: 1400px;
    height: auto;
`;

export const OtherOrderItemStyle = styled.li`
    width: 100%;
    height: 160px;
    padding: 20px 50px 20px 160px;
    display: flex;
    align-items: center;
    gap: 40px;
    .img {
        width: 120px;
        height: 120px;
        border: 1px solid #fff;
        position: relative;
        background-color: #fff;
        img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .inner {
        width: 1030px;
        height: 63px;
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 40px;
        margin: 0;

        .name-category {
            width: 708px;
            height: 63px;
            display: flex;
            align-items: flex-start;

            gap: 20px;
            flex-flow: column;
            .name {
                color: #fff;
                font-size: 20px;
                font-weight: 400;
            }
            .category {
                color: #fff;
                font-size: 16px;
                font-weight: 400;
            }
        }
        .price {
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 16px;
            font-weight: 400;
            margin-left: 160px;
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
        .btn {
            cursor: pointer;
        }

        .del-icon {
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
`;
