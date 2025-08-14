import styled from 'styled-components';

export const Section3Style = styled.section`
    height: auto;
    padding-top: 190px;
    box-sizing: border-box;
    .colab-all {
        width: 1400px;
        height: 350px;
        margin: auto;
        border-radius: 20px;
        display: flex;
        overflow: hidden;
        /* background-color: #000; */
        margin-bottom: 190px;
        .more {
            color: #fff;
            box-sizing: border-box;
            padding-left: 60px;
            padding-top: 56px;
            flex: 1;
            transition: all 0.5s ease;
            h4 {
                font-weight: 700;
                font-size: 40px;
            }
            p {
                font-weight: 400;
                font-size: 20px;
            }
            &:hover {
                flex: 2;
                /* transition: 0.5s; */
            }
        }
        .colab-archieve {
            width: 700px;
            background-image: url('/images/colab/칠가이.png');
            background-repeat: no-repeat;
            background-size: cover;
        }
        .next-up {
            width: 700px;
            background-image: url('/images/colab/텔레토비.png');
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    .text {
        width: 1698px;
        height: 806px;
        margin: auto;
        line-height: 1.2;
        strong {
            display: block;
            text-align: left;
            -webkit-text-stroke-width: 3px;
            -webkit-text-stroke-color: #888;
            color: transparent; /* 글씨 내부 색상 투명 */
            font-size: 155px;
            font-weight: 500;
            text-transform: uppercase;
        }
    }
`;
