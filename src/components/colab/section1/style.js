import styled from 'styled-components';

export const Section1Style = styled.section`
    height: 1490px;
    .visual-banner {
        position: relative;
        .visual-image {
            width: 100%;
            min-width: 1920px;
            height: 1490px;
            /* z-index: 0; */
            position: relative;
            img {
            }
            /* 이미지 bg로 띄우면 좋은데 상태관리 style component에 적용할 수 있나 */
            .gradient-overlay {
                position: absolute;
                bottom: 410px;
                left: 0;
                width: 100%;
                height: 60%;
                background: linear-gradient(transparent, rgba(0, 0, 0, 1));
                /* pointer-events: none; */
            }
        }
        .new-product {
            width: 1200px;
            margin: auto;
            position: absolute;
            z-index: 10;
            top: 700px;
            left: 50%;
            transform: translateX(-50%);
            .title {
                z-index: 10;
                color: #fff;
                h2 {
                    font-size: 56px;
                    font-weight: 700;
                    text-align: left;
                    margin-bottom: 0;
                }
                p {
                    font-size: 24px;
                    font-weight: 600;
                }
            }
            .new-product-list {
                height: 484px;
                background-color: rgb(44, 111, 255);
                margin-top: 40px;
            }
        }
    }
`;
