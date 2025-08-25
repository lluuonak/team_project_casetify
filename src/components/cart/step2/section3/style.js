import styled from 'styled-components';

export const Section3Style = styled.section`
    padding: 40px 0;
    width: 100%;
    height: 490px;
    .inner {
        width: 1440px;
        height: 100%;
        margin: auto;
        display: flex;
        flex-flow: column;
        gap: 40px;
        h3 {
            color: #fff;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            height: 29px;
        }
        .payment-info {
            width: 100%;
            height: 192px;
            padding: 40px 0;
            display: flex;
            flex-flow: column;
            gap: 20px;
            align-items: center;
            .part {
                width: 1320px;
                height: 24px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .title {
                    color: #fff;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
                .price {
                    color: #fff;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
                .two-column {
                    width: 245px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 30px;
                }
            }
        }
        .result-info {
            width: 100%;
            height: 109px;
            padding: 40px 60px;
            p {
                width: 1320px;
                height: 29px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .title {
                    color: #fff;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
                .price {
                    color: #ff5b37;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }
            }
        }
    }
`;
