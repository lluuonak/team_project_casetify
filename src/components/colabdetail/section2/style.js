import styled from 'styled-components';

export const Section2Style = styled.section`
    text-align: center;
    line-height: 1.2;
    span {
        font-size: 20px;
        color: #fff;
        font-weight: 400;
    }
    h3 {
        font-size: 40px;
        font-weight: 600;
        color: #fff;
        margin-top: 20px;
    }
    .category-list {
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-top: 80px;
        li {
            color: rgba(136, 136, 136, 0.5);
            border: 1px solid rgba(136, 136, 136, 0.5);
            border-radius: 50px;
            padding: 8px 20px;
            box-sizing: border-box;
            font-size: 16px;
            user-select: none;
            cursor: pointer;
            &:hover {
                color: #fff;
                border: 1px solid #888;
            }
        }
    }
    .product-list {
        display: flex;
        gap: 80px;
        flex-wrap: wrap;
        width: 1200px;
        margin: auto;
        margin-top: 60px;
        li {
            width: 240px;
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
                }
            }
            .info {
                text-align: left;
                margin-top: 20px;
                padding: 0 20px;
                box-sizing: border-box;
                span {
                    color: #fff;
                    display: block;
                    &:first-child {
                        font-weight: 500;
                        font-size: 20px;
                        width: 200px;
                        height: 48px;
                    }
                    &:last-child {
                        font-weight: 300;
                        font-size: 16px;
                        margin-top: 14px;
                    }
                }
            }
        }
    }
`;
