import styled from 'styled-components';

export const Section1Style = styled.section`
    height: 520px;
    width: 100%;
    position: relative;
    overflow: hidden;

    /* 배경 이미지는 애니메이션 없음 */
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        z-index: 10;
    }

    .visual-text {
        color: #ffffff;
        display: flex;
        width: 1440px;
        justify-content: space-between;
        padding: 210px 50px 0 50px;
        box-sizing: border-box;
        align-items: center;
        margin-left: 240px;
        position: absolute;
        top: 0px;
        z-index: 20;

        /* 텍스트에만 fade 효과 적용 */
        &.fade-out {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        &.fade-in {
            opacity: 1;
            transition: opacity 0.3s ease-in-out;
        }

        strong {
            font-weight: 600;
            font-size: 48px;
            line-height: 80px;
            display: inline-block;
        }
        p {
            display: inline-block;
            text-align: right;
        }
    }
`;

export const Section2Style = styled.section`
    height: auto;
    text-align: center;
    .product-inner {
        padding-top: 200px;
        box-sizing: border-box;
        .title {
            display: flex;
            gap: 30px;
            color: #fff;
            justify-content: center;
            /* align-items: center; */
            h2 {
                font-size: 40px;
                font-weight: 600;
                display: inline-block;
            }
            span {
                font-size: 24px;
                font-weight: 400;
                transform: translateY(15px);
                width: 213px;
            }
        }
        .category-list {
            li {
                ul.cate {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                    li {
                        cursor: pointer;
                        padding: 8px 20px;
                        border-radius: 4px;
                        font-size: 16px;
                        color: rgba(136, 136, 136, 0.53);
                        border-radius: 50px;
                        border: 1px solid rgba(136, 136, 136, 0.5);
                        line-height: normal;

                        &:hover {
                            border: 1px solid #fff;
                        }

                        &.active {
                            color: white;
                            font-weight: 500;
                            border: 1px solid #ffffff;
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
            margin-bottom: 80px;
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
                        transition: transform 0.3s ease;
                        transform: scale(0.95);
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
            margin: auto;
            cursor: pointer;
            user-select: none;
            margin-top: 80px;
            font-size: 16px;
            background-color: #1a1a1a;
            margin-bottom: 200px;
            &:hover {
                color: #ff5b37;
                border: 1px solid #ff5b37;
            }
        }
    }

    .text {
        width: 1698px;
        height: 806px;
        margin: auto;
        line-height: 1.2;
        strong {
            display: block;
            text-align: left;
            -webkit-text-stroke-width: 3px;
            -webkit-text-stroke-color: #888;
            color: transparent; /* 글씨 내부 색상 투명 */
            font-size: 155px;
            font-weight: 500;
            text-transform: uppercase;
        }
    }
`;
