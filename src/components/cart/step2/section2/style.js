import styled from 'styled-components';

export const Section2Style = styled.section`
    width: 100%;
    height: auto;
    padding-top: 40px;
    .inner {
        width: 1440px;
        height: auto;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        gap: 40px;
        h3 {
            color: #fff;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            height: 29px;
        }
    }
`;

export const UserInfoStyle = styled.form`
    width: 100%;
    height: 495px;
    border-top: 1px solid rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    flex-flow: column;
    gap: 20px;
    padding: 40px 0;
    .user-info {
        width: 100%;
        height: 80px;
        display: flex;
        flex-flow: column;
        gap: 10px;
        p {
            width: 100%;
            height: 100%;
            padding: 0 60px;
            display: flex;
            align-items: center;
            gap: 60px;
            label {
                width: 137px;
                height: 100%;
                color: #fff;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                display: flex;
                align-items: center;
            }
            strong {
                color: rgba(255, 255, 255, 0.5);
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }
    }
    .address-info {
        width: 100%;
        height: 125px;
        padding: 0 60px;
        display: flex;
        gap: 30px;
        label {
            color: #fff;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
        span {
            color: #888;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            border: 1px solid #888;
            width: 82px;
            height: 22px;
            cursor: pointer;
        }
        p {
            display: flex;
            flex-flow: column;
            gap: 10px;
            width: 1143px;
            height: 125px;
            input {
                border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.5);
                outline: none;
                height: 35px;
                background-color: transparent;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                padding: 0 30px;
                width: 760px;
                color: rgba(255, 255, 255, 0.5);
            }
        }
    }
    .phone-info {
        width: 100%;
        height: 35px;
        padding: 0 60px;
        display: flex;
        gap: 30px;
        label {
            width: 137px;
            height: 100%;
            color: #fff;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            display: flex;
            align-items: center;
        }
        strong {
            color: rgba(255, 255, 255, 0.5);
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .email-info {
        width: 100%;
        height: 35px;
        padding: 0 60px;
        display: flex;
        gap: 30px;
        label {
            width: 137px;
            height: 100%;
            color: #fff;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            display: flex;
            align-items: center;
        }
        p {
            display: flex;
            gap: 30px;
            width: 594px;
            height: 100%;
            align-items: center;
            input {
                border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.5);
                outline: none;
                height: 35px;
                background-color: transparent;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                width: 200px;
                color: rgba(255, 255, 255, 0.5);
                padding-left: 30px;
                &::placeholder {
                }
            }
            span {
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            select {
                -webkit-appearance: none; /* 크롬 화살표 없애기 */
                -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
                appearance: none; /* 화살표 없애기 */
                border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.5);
                outline: none;
                height: 35px;
                background-color: transparent;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                width: 200px;
                color: rgba(255, 255, 255, 0.5);
                text-align: center;
            }
            .btn {
                width: 82px;
                height: 22px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50px;
                border: 1px solid #888;
                color: #888;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                cursor: pointer;
            }
        }
    }
`;
