import styled from 'styled-components';

export const Section2Style = styled.section``;

export const BtnsStyle = styled.div`
    margin-bottom: 190px;
    button {
        width: 500px;
        height: 350px;
        background-color: skyblue;
        border-radius: 20px;
        color: #fff;
        font-weight: 500;
        font-size: 48px;
    }

    .btns {
        width: 1600px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 50px;
        button:nth-child(1) {
            background-image: url('/images/colab/animation.png');
        }
        button:nth-child(2) {
            background-image: url('/images/colab/art.png');
        }
        button:nth-child(3) {
            background-image: url('/images/colab/characters.png');
        }
        button:nth-child(4) {
            background-image: url('/images/colab/movie.png');
        }
        button:nth-child(5) {
            background-image: url('/images/colab/fashion.png');
        }
        button:nth-child(6) {
            background-image: url('/images/colab/sports.png');
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
