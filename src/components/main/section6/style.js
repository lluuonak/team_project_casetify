// style.js
import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Section6Style = styled.section`
    height: 1626px;
    .inner {
        width: 1440px;
        /* height: 620px; */
        margin: auto;
        display: flex;
        flex-flow: column;
        gap: 60px;
        margin-bottom: 200px;

        .top {
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            span {
                font-size: 24px;
                margin-right: 20px;
            }
            strong {
                font-size: 32px;
            }
            .nav-area {
                width: 180px;
                height: 60px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                i {
                    cursor: pointer;
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        .swiper {
            width: 100%;
            height: 500px;
        }
        .swiper-slide {
            border-radius: 20px;
            overflow: hidden;
            .react-card-flip {
                width: 100%;
                height: 100%;

                .card {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    cursor: pointer;
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 20px;
                        transition: filter 0.3s;
                    }
                    span {
                        display: inline-block; /* 또는 block */
                        width: 100%;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translateX(-50%) translateY(-50%);
                        color: #fff;
                        text-align: center;
                        font-size: 32px;
                        font-weight: 600;
                        white-space: pre-line; /* \n 줄바꿈 허용 */
                        opacity: 0;
                        transition: opacity 0.3s;
                        z-index: 2;
                        pointer-events: none;
                    }
                    &::after {
                    content: "";
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    border-radius: 20px;
                    background: rgba(0,0,0,0.6);
                    opacity: 0;
                    transition: opacity 0.3s;
                    z-index: 1;
                    }   

                    &:hover span {
                        opacity: 1;
                    }
                    &:hover::after {
                        opacity: 1;
                    }
                    }

                .card-case {
                    .bg {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        border-radius: 20px;
                        left: 0;
                        top: 0;
                        background: linear-gradient(
                            0deg,
                            rgba(0, 0, 0, 0.6) 0%,
                            rgba(0, 0, 0, 0.6) 100%
                        );
                    }
                }
            }
        }
    }

    .text {
        width: 1698px;
        height: 382px;
        margin: auto;

        strong {
            display: block;
            text-align: left;
            -webkit-text-stroke-width: 3px;
            -webkit-text-stroke-color: #888;
            color: transparent; /* 글씨 내부 색상 투명 */
            font-size: 159px;

            font-weight: 500;
            text-transform: uppercase;
        }
    }
`;
