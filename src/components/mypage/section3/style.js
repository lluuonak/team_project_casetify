import styled from 'styled-components';

export const Section3Style = styled.section`
    width: 100%;
    height: 560px;
    background: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner {
        width: 1440px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
            width: 750px;
            height: 387px;
            display: flex;
            flex-flow: column;
            gap: 45px;
            h3 {
                color: #fff;
                font-family: Inter;
                font-size: 24px;
                font-weight: 400;
            }
            .nav-tap {
                width: 329px;
                height: 22px;
                display: flex;
                align-items: center;
                gap: 13px;
                li {
                    width: auto;
                    padding: 4px 20px;
                    height: 100%;
                    color: #888;
                    font-size: 12px;
                    font-weight: 400;
                    border-radius: 50px;
                    border: 1px solid #888;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    &.on {
                        border: 1px solid #fff;
                        color: #fff;
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                    }
                }
            }
            .context {
                width: 100%;
                height: auto;
                display: flex;
                flex-flow: column;
                gap: 30px;
                li {
                    width: 750px;
                    height: 39px;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                    span {
                        color: #fff;
                        font-family: Inter;
                        font-size: 16px;
                        font-weight: 400;
                        padding-left: 10px;
                    }
                    &:first-child {
                        border-bottom: 1px solid rgba(255, 255, 255, 0.8);
                    }
                }
            }
        }
        .right {
            width: 600px;
            height: 400px;
        }
    }
`;
