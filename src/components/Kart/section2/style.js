import styled from 'styled-components';

export const Section2Style = styled.section`
    width: 1920px;
    height: 1000px;
    margin: 0 auto;
    background: #1a1a1a;
    display: flex;
    .images {
        width: 1600px;
        flex-direction: column;
        gap: 30px;
        position: relative;
        .image-wrapper-left {
            position: absolute;
            top: 5%;
            left: 10%;
            width: 380px;
            height: 600px;
            overflow: hidden;
            border-radius: 50% / 35%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
        }
        .image-wrapper-right {
            position: absolute;
            top: 30%;
            left: 38%;
            width: 380px;
            height: 600px;
            overflow: hidden;
            border-radius: 50% / 35%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
        }
        .image-wrapper-top {
            opacity: 0.8;
            width: 100%;
            position: absolute;
            right: -60%;
            top: -20%;
        }
    }

    .text {
        position: absolute;
        right: 0%;
        bottom: 27%;
        max-width: 450px;
        color: #fff;
        text-align: left;
        h4 {
            font-size: 20px;
            margin-bottom: 10px;
            font-weight: 400;
            opacity: 0.8;
        }

        h2 {
            width: 500px;
            font-size: 32px;
            margin-bottom: 50px;
            text-align: left;
        }

        p {
            width: 570px;
            font-size: 20px;
            line-height: 1.6;
            opacity: 0.9;
        }
    }
`;
