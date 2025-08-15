import styled from 'styled-components';
export const OrderStatusStyle = styled.div`
    width: 100%;
    height: 227px;
    display: flex;
    flex-flow: column;
    gap: 40px;
    .title-area {
        width: 223px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        strong {
            color: #fff;
            font-size: 20px;
            font-weight: 400;
        }
        span {
            color: #fff;
            font-size: 14px;
            font-weight: 400;
        }
    }
    .contents {
        width: 100%;
        height: 148px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 140px;
        border-top: 1px solid rgba(255, 255, 255, 0.8);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        li {
            width: auto;
            height: 88px;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            gap: 40px;
            span {
                display: block;
                color: #fff;
                font-size: 20px;
                font-weight: 400;
            }
        }
    }
`;

export const OrderListStyle = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column;
    gap: 40px;
    display: flex;
    .title-area {
        width: 131px;
        height: 29px;
        display: flex;
        align-items: center;
        justify-content: center;
        strong {
            color: #fff;
            font-size: 20px;
            font-weight: 400;
        }
    }
    .list {
        display: flex;
        flex-flow: column;
        gap: 40px;
        box-sizing: border-box;
        /* border-top: 1px solid rgba(255, 255, 255, 0.8); */
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    .bottom {
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .btn-area {
            display: flex;
            width: 280px;
            height: 35px;
            justify-content: center;
            align-items: center;
            gap: 40px;
            a {
                border-radius: 50px;
                border: 1px solid #fff;
                width: 120px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 16px;
                font-weight: 400;
            }
        }
    }
`;

export const OrderItemStyle = styled.li`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column;
    gap: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.8);
    padding: 40px 0;
    /* 공통 css */
    .item-btn {
        width: 85px;
        height: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        border: 1px solid #888;
        color: #888;
        font-size: 12px;
        font-weight: 400;
        line-height: 22px;
    }
    span {
        display: block;
        color: #fff;
        font-size: 18px;
        font-weight: 400;
    }
    .top {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
            width: 337px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .right {
            width: 85px;
            height: 100%;
            display: flex;
            align-items: center;
        }
    }

    .middle {
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        padding-left: 90px;
        padding-right: 50px;
        border-left: 3px solid #fff;
        .img-area {
            width: 160px;
            height: 160px;
            border: 1px solid #fff;
        }
        .text-area {
            width: 1030px;
            height: 24px;
            display: flex;
            align-items: center;
            .name {
                width: 530px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
            }
            .price {
                width: 500px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
            }
        }
        .delete-btn {
            cursor: pointer;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .bottom {
        width: 100%;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
            width: 165px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .right {
            width: 85px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;
