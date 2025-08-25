import styled from 'styled-components';

export const Section2Style = styled.section`
    height: 750px;
    .btns {
        width: 1600px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 50px;
        a {
            &:hover::after {
                opacity: 0.5;
            }
            &:nth-child(1) {
                background-image: url('/images/colab/animation.png');
            }
            &:nth-of-type(2) {
                background-image: url('/images/colab/art.png');
                background-size: 102%;
                background-position: 0 -2px;
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
            li {
                width: 500px;
                height: 350px;
                border-radius: 22px;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                /* cursor: pointer; */
                h4 {
                    color: #fff;
                    font-weight: 500;
                    font-size: 48px;
                    position: relative;
                    width: auto;
                    z-index: 10;
                    text-align: center;
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
            }
        }
    }
`;
