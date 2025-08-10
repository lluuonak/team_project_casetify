import styled from 'styled-components';

export const Section3Style = styled.section`
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
        background-image: url('/images/colab/collab-archieve.png');
    }
    .next-up {
        width: 700px;
        background-image: url('/images/colab/next-up.png');
    }
`;
