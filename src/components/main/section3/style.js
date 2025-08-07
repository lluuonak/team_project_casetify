import styled from 'styled-components';

export const Section3Style = styled.section`
    .inner {
        width: 100%;
        height: 1040px;
        position: relative;
        overflow: hidden;
        .rotation-img {
            position: absolute;
            top: 0;
            left: 0px;
            width: 1910px;
            height: 1910px;
            background-image: url('/images/section3/main11 (1).png');
            background-repeat: no-repeat;
            background-size: contain;
        }
        .left {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 400px;
            height: 300px;
            background: linear-gradient(180deg, rgba(26, 26, 26, 0) 32.46%, #000 70%);
        }
        .right {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 400px;
            height: 300px;
            background: linear-gradient(180deg, rgba(26, 26, 26, 0) 32.46%, #000 70%);
        }
        article {
            position: absolute;
            left: 50%;
            bottom: 100px;
            transform: translate(-50%);
            width: 876px;
            height: 269px;
            display: flex;
            flex-flow: column;
            gap: 100px;
            justify-content: center;
            .text-area {
                width: 876px;
                height: 134px;
                display: flex;
                flex-flow: column;
                gap: 30px;
                justify-content: center;
                color: #fff;
                strong {
                    text-align: center;
                    display: block;
                    font-size: 64px;
                    font-weight: 600;
                    line-height: 80px; /* 125% */
                }
                span {
                    text-align: center;
                    display: block;
                    color: #fff;
                    font-size: 20px;
                    font-weight: 400;
                }
            }
            .more {
                display: block;
                width: 100%;
                height: 35px;
                display: flex;
                justify-content: center;
                a {
                    width: 147px;
                    height: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid #fff;
                    border-radius: 50px;
                    color: #fff;
                    font-size: 16px;
                }
            }
        }
    }
`;
