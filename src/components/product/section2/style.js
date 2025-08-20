import styled from 'styled-components';

export const Section2Style = styled.section`
    width: 1920px;
    height: 900px;
    background-color: #1a1a1a;
    .text-box {
        padding-top: 200px;
        width: 500px;
        margin: 0 auto;
        text-align: center;
        font-size: 48px;
        font-weight: 600;
        color: #fff;
        span {
            font-size: 60px;
        }
    }
    .img-box {
        width: 830px;
        margin: 120px auto;
        margin-bottom: 100px;
        ul {
            display: flex;
            justify-content: center;
            gap: 95px;
            list-style: none;
            padding: 0;
            li {
                flex-direction: column;
                align-items: center;
                text-align: center;
                p {
                    margin-top: 20px;
                    font-size: 20px;
                    color: #fff;
                }
            }
            img {
                width: 170px;
                height: 170px;
                object-fit: cover;
            }
        }
    }
    .bottom-text {
        width: 1600px;
        margin: 0 auto;
        p {
            text-align: center;
            font-size: 36px;
            font-weight: 500;
            color: #fff;
        }
    }
`;
