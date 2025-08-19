import styled from 'styled-components';

export const Section1Style = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 500px;
    background-color: #000;

    .visual-container {
        position: relative;
        width: 100%;
        height: 1040px;
        /* overflow: hidden; */

        .overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 400px;
            background: linear-gradient(transparent, rgba(0, 0, 0, 1));
            z-index: 2;
        }

        .content-wrap {
            position: absolute;
            top: 500px;
            left: 50%;
            transform: translateX(-50%);
            width: 1200px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* align-items: center; */
            margin: auto;
            z-index: 10;
            padding: 0 20px;
        }
    }
`;

export const BackgroundSlide = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(${(props) => props.bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: opacity 1.2s ease-in-out;
    z-index: 1;
`;

export const TextContent = styled.div`
    color: #fff;
    margin-bottom: 40px;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transform: ${(props) => (props.active ? 'translateY(0)' : 'translateY(50px)')};
    transition: all 1s ease-out;
    letter-spacing: 0;
    position: relative;

    h1 {
        font-size: 56px;
        font-weight: bold;
        margin-bottom: 12px;
        line-height: 80px;
    }

    span {
        &:first-of-type {
            font-size: 24px;
            opacity: 0.9;
            max-width: 600px;
            line-height: 29px;
            margin: 0;
        }
        &:last-of-type {
            display: none;
            font-size: 16px;
            color: #fff;
            /* display: inline-block; */
            border: 1px solid #fff;
            box-sizing: border-box;
            padding: 8px 30px;
            border-radius: 50px;
            line-height: 1.2;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            &:hover {
                border: 1px solid #ff5b37;
                color: #ff5b37;
            }
        }
    }
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 80px;
    max-width: 1200px;
    width: 100%;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transform: ${(props) => (props.active ? 'translateY(0)' : 'translateY(50px)')};
    transition: all 1s ease-out 0.2s;
`;

export const ProductCard = styled.div`
    /* background: rgba(255, 255, 255, 0.95); */
    border-radius: 20px;
    /* backdrop-filter: blur(10px); */
    transition: transform 0.3s ease;
    cursor: pointer;
    box-sizing: border-box;
    width: 240px;

    &:hover {
        transform: translateY(-5px);
    }
    .img-bg {
        width: 240px;
        height: 370px;
        background: #fff;
        /* background-size: cover;
        border-radius: 8px;
        margin-bottom: 12px; */
        border-radius: 20px;
        position: relative;
        overflow: hidden;
        margin-bottom: 20px;
        img {
            width: 366px;
            height: 351px;
            display: block;
            position: absolute;
            left: -26%;
            top: 7px;
            transition: transform 0.3s ease;
        }
    }
    .text {
        padding: 0 20px;
        h4 {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 8px;
            color: #fff;
            line-height: 1.2;

            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
        }

        span {
            font-size: 16px;
            font-weight: 400;
            color: #fff;
        }
    }
`;

export const ProductImage = styled.div`
    width: 240px;
    height: 370px;
    background: url(${(props) => props.img}) no-repeat center;
    background-size: cover;
    border-radius: 8px;
    margin-bottom: 12px;
`;
