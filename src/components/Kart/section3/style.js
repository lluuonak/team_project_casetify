import styled from 'styled-components';

export const Section3Style = styled.section`
    width: 1920px;
    margin: 0 auto;
    min-height: auto;
    height: auto;
    background-color: #1a1a1a;
    color: #fff;
    padding: 80px 0;
    overflow: visible;
    .category-block {
        margin-bottom: 80px;
    }

    .category-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1600px;
        margin: 0 auto 40px;

        p {
            font-size: 48px;
            font-weight: 500;
            font-style: italic;
            padding: 0 20px;
        }

        .toggle-btn {
            background: none;
            /* border: 2px solid #fff; */
            border-radius: 50%;
            width: 48px;
            height: 48px;
            cursor: pointer;
            line-height: 44px;
            text-align: center;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            svg {
                width: 36px;
                height: 36px;
                fill: #fff;
            }
        }

        .toggle-btn:hover {
            /* background-color: #fff; */
            svg {
                width: 36px;
                height: 36px;
                fill: #000;
            }
        }
    }

    .category-content {
        overflow: hidden;
    }

    .product-item {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 1440px;
        gap: 120px;
        row-gap: 80px;
        margin: 0 auto;
    }

    .footer-banner {
        width: 1920px;
        height: 620px;
        /* padding-top: 120px; */
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
        cursor: pointer;
        img {
            width: 366px;
            height: 351px;
            display: block;
            position: absolute;
            left: -26%;
            top: 7px;
            /* transform: translate(-50%); */
            transition: transform 0.3s ease;
        }
        &:hover {
            img {
                width: 404px;
                height: 394px;
                left: -34%;
                top: -7px;
            }
        }
    }
    .info {
        width: 100%;
        height: 90px;
        color: #fff;
        padding: 0 20px;
        .name {
            height: 70px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 20px;
            font-weight: 500;
        }
        .price {
            display: block;
            font-size: 16px;
        }
    }
`;
