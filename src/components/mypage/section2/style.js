import styled from 'styled-components';

export const Section2Style = styled.section`
    width: 100%;
    height: 540px;
    background: #272727;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner {
        width: 1440px;
        height: 344px;
        margin: auto;
        display: flex;
        flex-flow: column;
        gap: 60px;
        .top {
            width: 100%;
            height: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text-area {
                color: #fff;
                font-family: Inter;
                font-size: 20px;
                font-weight: 600;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                i {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .left,
                .right {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    strong {
                        display: block;
                    }
                }
            }
            .more {
                cursor: pointer;
                width: 82px;
                height: 22px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #888;
                font-size: 12px;
                font-weight: 400;
                border-radius: 50px;
                border: 1px solid #888;
            }
        }
    }
`;

export const BottomStyle = styled.div`
    width: 100%;
    height: 260px;
    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        width: 240px;
        height: 100%;
        border-radius: 20px;
        background: rgba(136, 136, 136, 0.2);
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        .inner {
            width: 200px;
            height: 200px;
            display: flex;
            flex-flow: column;
            gap: 30px;
            strong {
                color: #fff;
                font-size: 18px;
                font-weight: 400;
                display: block;
            }
            ul {
                width: 100%;
                height: 96px;
                li {
                    list-style: disc; /* ● 불릿 */
                    list-style-position: inside; /* 안쪽에 표시 (옵션) */
                    color: #fff;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 24px; /* 171.429% */
                    padding-left: 20px;
                    text-indent: -1.6em; /* 두 번째 줄 들여쓰기 맞추기 */
                }
            }
            .more {
                cursor: pointer;

                width: 82px;
                height: 22px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50px;
                border: 1px solid #888;
                color: #888;
                font-size: 12px;
                font-weight: 400;
                margin: auto;
            }
        }
    }
`;
