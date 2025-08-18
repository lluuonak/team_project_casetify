import styled from 'styled-components';

export const HeaderStyle = styled.header`
    background: #000;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    .inner {
        width: 1800px;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .menu-icon {
            width: 26px;
            height: 26px;
            cursor: pointer;
        }
        .logo {
            cursor: pointer;
            margin-left: 100px;
        }
        .top-nav {
            width: 138px;
            height: 26px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

export const MenuStyle = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background: #1a1a1a;
    z-index: 999;
    position: fixed;
    left: -9999px;
    top: 100px;
    transition: 0.5s;
    display: none;
    .inner {
        width: 1700px;
        height: 904px;
        display: flex;
        flex-flow: column;
        gap: 30px;

        .first {
            width: 100%;
            height: 260px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            strong {
                display: block;
                padding-left: 50px;
                width: 302px;
                height: 140px;
                color: #fff;
                font-family: Inter;
                font-size: 48px;
                font-weight: 700;
                line-height: 70px;
            }
            .first-contents {
                width: 1263px;
                height: 260px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 20px;
                overflow: hidden;

                .just-img {
                    height: 100%;
                    flex: 1.2;
                    background-image: url('/images/header/contents1.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .link-to-page {
                    height: 100%;
                    flex: 0.8;
                    background-image: url('/images/header/contents2.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                    a {
                        width: 100%;
                        height: 100%;
                        display: block;

                        article {
                            position: absolute;
                            left: 40px;
                            bottom: 40px;
                            width: 223px;
                            height: 100px;
                            display: flex;
                            flex-flow: column;
                            color: #fff;
                            strong {
                                display: block;
                                font-family: Inter;
                                font-size: 46px;
                                font-style: normal;
                                font-weight: 700;
                                line-height: 70px; /* 152.174% */
                                padding: 0;
                            }
                            span {
                                display: block;
                                font-family: Pretendard;
                                font-size: 20px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 28px; /* 140% */
                            }
                        }
                        .arrow {
                            position: absolute;
                            right: 40px;
                            bottom: 40px;
                            width: 70px;
                            height: 70px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 20px;
                            border: 1px solid #fff;
                            transition: 0.5s;
                        }
                    }
                    &:hover {
                        flex: 1.6;
                        transition: 0.5s;

                        a {
                            .arrow {
                                border-radius: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
    .second {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        width: 100%;
        height: 260px;
        div {
            height: 260px;
            border-radius: 20px;
            position: relative;
            display: flex;
            align-items: center;
            background-color: #000;
            &:hover {
                border-radius: 20px;
                box-shadow: 0 0 19px 0 rgba(255, 255, 255, 0.5);
            }
            .menu-title {
                padding-left: 34px;
                width: 215px;
                height: 64px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                strong {
                    display: block;
                    color: #fff;
                    font-family: Inter;
                    font-size: 36px;
                    font-weight: 700;
                }
                span {
                    display: block;
                    color: #fff;
                    font-family: Inter;
                    font-size: 20px;
                    font-weight: 400;
                }
            }
        }
        .w600 {
            width: 600px;
        }
        .w400 {
            width: 400px;
        }
    }
    .third {
        display: flex;
        justify-content: space-between;
        height: 200px;
        width: 100%;
        .title-area {
            padding-left: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            strong {
                color: #fff;
                font-family: Inter;
                font-size: 36px;
                font-weight: 700;
            }
        }

        .third-menus {
            width: 1260px;
            height: 200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            li {
                width: 400px;
                height: 200px;
                border-radius: 20px;
                background-repeat: no-repeat;
                background-size: cover;
                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    color: #fff;
                    font-family: Inter;
                    font-size: 36px;
                    font-weight: 700;
                }
                &:hover {
                    border-radius: 20px;
                    box-shadow: 0 0 19px 0 rgba(255, 255, 255, 0.5);
                }
            }
        }
    }

    &.on {
        left: 0;
        display: block;
        z-index: 999;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1500px;
    background-color: rgba(0, 0, 0, 0.7); /* 반투명 검은색 */
    z-index: 998; /* 메뉴보다 한 단계 아래 */
`;
