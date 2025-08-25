import styled from 'styled-components';

export const Section2Style = styled.section`
    width: 1920px;
    height: auto;
    margin: 0 auto;
    margin-top: 155px;
    background-color: #1a1a1a;
    .text-box {
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
                cursor: pointer;
                p {
                    margin-top: 20px;
                    font-size: 20px;
                    color: #fff;
                }
                &:hover img {
                    transform: scale(1.1);
                    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6));
                }
            }
            img {
                width: 170px;
                height: 170px;
                object-fit: cover;
                transition: transform 0.4s ease;
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
