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
    }
`;

export const WishItemStyle = styled.li``;
