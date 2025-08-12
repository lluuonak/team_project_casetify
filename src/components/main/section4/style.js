import styled from 'styled-components';

export const Section4Style = styled.section`
    height: 2268px;
    .contents-list {
        margin: auto;
        width: 1440px;
        height: 2068px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        gap: 100px;
        .title-area {
            width: 100%;
            height: 148px;
            display: flex;
            flex-flow: column;
            gap: 30px;
            strong {
                display: block;
                text-align: center;
                color: #fff;
                font-size: 40px;
                font-weight: 600;
            }
            span {
                display: block;
                text-align: center;
                color: #fff;
                text-align: center;
                font-size: 24px;
                font-weight: 400;
                line-height: 35px; /* 145.833% */
            }
        }
        .contents {
            margin: auto;
            width: 1200px;
            height: 540px;
            display: flex;
            flex-flow: column;
            gap: 60px;
            .top {
                width: 100%;
                height: 39px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .title {
                    color: #fff;
                    display: flex;
                    gap: 20px;
                    align-items: center;
                    strong {
                        font-family: Inter;
                        font-size: 32px;
                        font-weight: 600;
                    }
                    span {
                        font-size: 16px;
                        font-weight: 400;
                    }
                }
                .more {
                    width: 105px;
                    height: 35px;
                    border-radius: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid #fff;
                    color: #fff;
                    font-size: 16px;
                }
            }
            .bottom {
                width: 100%;
                height: 441px;
                display: flex;
                justify-content: center;
                gap: 60px;

            }
        }
    }
`;

export const ListItemStyle = styled.li`
    width: 240px;
    height: 100%;
    display: flex;
    flex-flow: column;
    gap: 20px;
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

            &:hover {
                /* transform: scale(1.1); */
                cursor: pointer;
            }
        }
        .like-btn {
            right: 23px;
            bottom: 38px;
        }
        &:hover{
            img{
                width: 404px;
                height: 394px;
                left: -34%;
                top: -7px;
            }
        }
    }
    .info {
        width: 100%;
        height: 51px;
        padding-left: 20px;
        color: #fff;
        strong {
            display: block;
            font-size: 20px;
            font-weight: 500;
        }
        span {
            display: block;
            font-size: 16px;
        }
    }
`;
