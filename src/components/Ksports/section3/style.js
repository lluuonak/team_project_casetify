import styled from 'styled-components';

export const Section3Style = styled.section`
    width: 1920px;
    height: 2000px;
    margin: 0 auto;
    background: #000;
    color: #fff;
    .product-text {
        width: 1600px;
        height: 80px;
        margin: 0 auto;
        margin-bottom: 60px;
        p {
            width: 100%;
            font-size: 48px;
            font-weight: 500;
            font-style: italic;
        }
    }
    .product-item {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 1440px;
        height: 800px;
        gap: 120px;
        row-gap: 70px;
        margin: 0 auto;
    }
    .footer-banner {
        width: 1920px;
        height: 700px;
        padding-top: 200px;
    }
`;

export const ListItemStyle = styled.section`
    width: 240px;
    height: 100%;
    display: flex;
    flex-flow: column;
    gap: 20px;
    .img-bg {
        width: 100%;
        height: 370px;
        background-color: #fff;
        border-radius: 20px;
        position: relative;
        img {
            width: 366px;
            height: 351px;
            display: block;
            position: absolute;
            left: -26%;
            top: 7px;
            /* transform: translate(-50%); */
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.1);
                cursor: pointer;
            }
        }
    }
    .info {
        width: 100%;
        height: 51px;
        color: #fff;
        .name {
            display: block;
            font-size: 20px;
            font-weight: 500;
        }
        .price {
            display: block;
            font-size: 16px;
        }
    }
`;
