import styled from 'styled-components';

export const WishListStyle = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column;
    gap: 40px;
    h3 {
        display: block;
        width: 100%;
        height: 29px;
        text-align: center;
        color: #fff;
        font-size: 24px;
        font-weight: 400;
    }
    .list {
        width: 100%;
        height: auto;
        border-top: 1px solid rgba(255, 255, 255, 0.8);
        box-sizing: border-box;
        display: flex;
        flex-flow: column;
    }
`;

export const WishItemStyle = styled.li`
    border-top: 1px solid rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 140px;
    padding-left: 30px;
    padding-right: 50px;
    display: flex;
    align-items: center;
    gap: 40px;
    i {
        cursor: pointer;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img {
        width: 100px;
        height: 100px;
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
    .item-info {
        width: 1103px;
        height: 65px;
        display: flex;
        flex-flow: column;
        gap: 20px;
        span {
            display: block;
            font-size: 20px;
            color: #fff;
            height: 24px;
            width: auto;
        }
    }
    .cart-icon {
        cursor: pointer;
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &:first-child {
        border: none;
    }
`;
