import styled from 'styled-components';

export const HeaderStyle = styled.header`
    background: #000;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
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
    top: 70px;
    transition: 0.5s;
    display: none;
    .inner {
        width: 1700px;
        height: 904px;
        display: flex;
        flex-flow: column;
        gap: 40px;

        .first {
            width: 100%;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            strong {
                display: block;
                padding-left: 50px;
                width: 252px;
                height: 104px;
                color: #fff;
                font-family: Inter;
                font-size: 48px;
                font-weight: 700;
                line-height: 70px;
            }
            .video {
                width: 1200px;
                height: 400px;
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
                    width: 187px;
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
