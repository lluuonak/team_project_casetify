import styled from 'styled-components';

export const OrderNavStyle = styled.ul`
    width: 1440px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;

    .nav {
        width: auto;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        .icon {
            width: 26px;
            height: 26px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .text {
            font-size: 20px;
            font-weight: 400;
        }
    }
    .arrow {
        width: 53px;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: 400;
    }
`;
