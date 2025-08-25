import styled from 'styled-components';

export const Section4Style = styled.section`
    width: 1920px;
    height: auto;
    color: #1a1a1a;
    margin: 0 auto;
    background-color: #1a1a1a;
    .series {
        width: 1600px;
        margin: 0 auto;
        .series-text {
            p {
                text-align: center;
                color: #fff;
                font-size: 36px;
            }
            margin-bottom: 60px;
        }
        .series-img {
            width: 1400px;
            height: 350px;
            margin: 0 auto;
            border-radius: 20px;
            margin-bottom: 200px;
            display: flex;
            align-items: center;
            overflow: hidden;
            text-align: center;
            li {
                flex: 1;
                height: 100%;
                position: relative;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                cursor: pointer;
                transition: transform 0.4s ease;
                span {
                    width: 100%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: #fff;
                    font-size: 38px;
                    font-weight: 500;
                    transition: transform 0.4s ease;
                }
                &:hover {
                    flex: 1.3;
                    transition: 0.5s;
                    transform: scale(1.02);
                }
                &:hover span {
                    transform: translate(-50%, -50%) scale(1.05);
                }
            }
            .impact {
                height: 100%;
                flex: 1;
                background-image: url('../../public/images/product/series-impact.png');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: left;
            }
            .bounce {
                height: 100%;
                flex: 1;
                background-image: url('../../public/images/product/series-bounce.png');
                background-repeat: no-repeat;
                background-size: cover;
            }
            .ring {
                height: 100%;
                flex: 1;
                background-image: url('../../public/images/product/series-ring.png');
                background-repeat: no-repeat;
                background-size: cover;
            }
        }
    }
    /* .bottom-img {
        width: 1700px;
        margin: 0 auto;
        img {
            object-fit: cover;
        }
    } */
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
            color: transparent;
            font-size: 155px;
            font-weight: 500;
            text-transform: uppercase;
        }
    }
`;
