import styled from 'styled-components';

export const Section2Style = styled.section`
    .btns {
        width: 1600px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 50px;
        button {
            width: 500px;
            height: 350px;
            border-radius: 22px;
            position: relative;
            h4 {
                color: #fff;
                font-weight: 500;
                font-size: 48px;
                position: relative;
                z-index: 10;
            }
            &:after {
                content: '';
                transition: 0.3s ease-in-out;
                display: block;
                width: 500px;
                height: 350px;
                background-color: #000;
                border-radius: 20px;
                opacity: 40%;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1;
                opacity: 0;
            }
            &:hover::after {
                opacity: 0.5;
            }
            &:nth-child(1) {
                background-image: url('/images/colab/animation.png');
            }
            &:nth-child(2) {
                background-image: url('/images/colab/art.png');
                background-size: 101%;
            }
            &:nth-child(3) {
                background-image: url('/images/colab/characters.png');
            }
            &:nth-child(4) {
                background-image: url('/images/colab/movie.png');
            }
            &:nth-child(5) {
                background-image: url('/images/colab/fashion.png');
            }
            &:nth-child(6) {
                background-image: url('/images/colab/sports.png');
            }
        }
    }
`;

export const MoreColabStyle = styled.div`
    width: 1400px;
    height: 350px;
    margin: auto;
    border-radius: 20px;
    display: flex;
    .more {
        color: #fff;
        box-sizing: border-box;
        padding-left: 60px;
        padding-top: 56px;
        h4 {
            font-weight: 700;
            font-size: 40px;
        }
        p {
            font-weight: 400;
            font-size: 20px;
        }
    }
    .colab-archieve {
        width: 700px;
        background-color: skyblue;
    }
    .next-up {
        width: 700px;
        background-color: orange;
    }
`;
