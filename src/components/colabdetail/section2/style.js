import styled from 'styled-components';

export const Section2Style = styled.section`
    height: auto;
    text-align: center;
    line-height: 1.2;
    background: transparent;
    /* background-image: url('../images/colab/2.png'); */
    /* background-position: 0 -300px; */
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    background-size: cover;

    .category-list {
        li {
            ul.cate {
                li {
                    cursor: pointer;
                    padding: 8px 12px;
                    border-radius: 4px;

                    &:hover {
                        border: 2px solid #fff;
                        /* color: #ff5b37; */
                    }

                    &.active {
                        /* background: #ff5b37; */
                        color: white;
                        font-weight: 500;
                    }
                }
            }
        }
    }
    .product-inner {
        min-width: 1200px;
        padding-bottom: 115px;
        box-sizing: border-box;
        position: relative;
        .line {
            width: 1000px;
            height: 8px;
            background-color: #d9d9d9;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: -120px;
            border-radius: 50px;
        }
        /* &::before {
            content: '';
            display: block;
            width: 1000px;
            height: 8px;
            background-color: #d9d9d9;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: -120px;
            border-radius: 50px;
        } */
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
            margin-top: 80px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-left: 354px;
            > li {
                display: flex;
                span {
                    font-size: 16px;
                    font-weight: 700;
                    width: 70px;
                    color: rgba(136, 136, 136, 0.5);
                    align-content: center;
                    text-align: left;
                }
                .cate {
                    display: flex;
                    gap: 20px;
                    > li {
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
            }
        }
        .product-list {
            display: flex;
            gap: 80px;
            flex-wrap: wrap;
            width: 1200px;
            margin: auto;
            margin-top: 60px;
            justify-content: left;
            li {
                width: 240px;
                .img-bg {
                    width: 100%;
                    height: 370px;
                    background-color: #fff;
                    border-radius: 20px;
                    position: relative;
                    overflow: hidden;
                    img {
                        width: 366px;
                        height: 351px;
                        display: block;
                        position: absolute;
                        left: -26%;
                        top: 7px;
                        /* transform: translate(-50%); */
                        /* transition: transform 0.3s ease; */
                        &:hover {
                            transform: scale(1.1);
                            cursor: pointer;
                        }
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
                            font-size: 20px;
                            font-weight: 500;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;

                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: normal;
                            margin-bottom: 20px;
                        }
                        &:last-child {
                            display: block;
                            font-size: 16px;
                        }
                    }
                }
            }
        }
        .view-more {
            color: #fff;
            display: inline-block;
            border: 1px solid #fff;
            border-radius: 50px;
            line-height: 1.2;
            padding: 8px 30px;
            transform: translateY(10px);
            cursor: pointer;
            user-select: none;
            margin-top: 80px;
            font-size: 16px;
            background-color: #1a1a1a;
            &:hover {
                color: #ff5b37;
                border: 1px solid #ff5b37;
            }
        }
    }
`;
