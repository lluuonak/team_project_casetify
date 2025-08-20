import styled from 'styled-components';

export const Section1Style = styled.section`
    width: 1920px;
    height: 900px;
    background-color: #1a1a1a;
    margin-top: 100px;
    .visual-section {
        margin: 0 auto;
        display: flex;
        align-items: center;
        width: 1580px;
        height: 100%;
        background: #1a1a1a;
        position: relative;
    }

    /* 텍스트 영역 */
    .visual-text {
        width: 500px;
        height: 475px;
        .visual-text-wrapper {
            position: relative;
            height: 320px;
            margin-bottom: 100px;
            overflow: hidden;
            .text-slide {
                position: absolute;
                width: 100%;
                opacity: 0;
                transform: translateY(100%);
                transition: opacity 0.6s ease, transform 0.6s ease;
                color: #fff;
                h2 {
                    font-size: 48px;
                    font-weight: 700;
                    margin-bottom: 40px;
                    text-align: left;
                }
                p {
                    font-size: 20px;
                    line-height: 1.6;
                }
            }
            .active {
                opacity: 1;
                transform: translateY(0);
                z-index: 2;
                animation: titleIn 0.8s ease forwards;
            }
            .exit {
                opacity: 0;
                transform: translateY(-100%);
                z-index: 1;
                animation: titleOut 0.8s ease forwards;
            }
        }
        @keyframes textIn {
            from {
                opacity: 0;
                transform: translateY(100%);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes textOut {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-100%);
            }
        }
        .more-btn {
            color: #fff;
            width: 145px;
            height: 35px;
            border: 1px solid #fff;
            border-radius: 50px;
            background: none;
            font-size: 16px;
            cursor: pointer;
        }
    }

    /* 이미지 영역 (오른쪽) */
    .slide-0 {
        .visual-img1 {
            border-radius: 100%;
        }
        .visual-img2 {
            border-radius: 280px;
        }
        .visual-img3 {
            border-radius: 80px;
        }
    }
    .slide-1 {
        .visual-img1 {
            border-radius: 100px;
        }
        .visual-img2 {
            border-radius: 100px;
        }
        .visual-img3 {
            border-radius: 100%;
        }
    }
    .slide-2 {
        .visual-img1 {
            border-radius: 43px;
        }
        .visual-img2 {
            border-radius: 100%;
        }
        .visual-img3 {
            border-radius: 100px;
        }
    }
    .visual-images {
        width: 1000px;
        height: 900px;
        justify-content: center;
        align-items: center;
        gap: 20px;
        position: relative;
        .visual-img1 {
            position: absolute;
            top: 20px;
            left: 50px;
            width: 300px;
            height: 300px;
            overflow: hidden;
            z-index: 3;
            animation: floatY 3s ease-in-out infinite;
            object-position: 20% 50%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 20% 50%;
            }
        }
        .visual-img2 {
            position: absolute;
            bottom: 140px;
            left: 260px;
            width: 704px;
            height: 704px;

            overflow: hidden;
            z-index: 2;
            animation: floatX 4s ease-in-out infinite;
            object-position: center;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 50% 50%;
            }
        }
        .visual-img3 {
            position: absolute;
            bottom: 100px;
            left: 50px;
            width: 300px;
            height: 300px;
            overflow: hidden;
            animation: floatY 5s ease-in-out infinite;
            object-position: 80% 50%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 50% 50%;
            }
        }
        /* keyframes 정의 */
        @keyframes floatY {
            0% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-15px);
            }
            100% {
                transform: translateY(0px);
            }
        }

        @keyframes floatX {
            0% {
                transform: translateX(0px);
            }
            50% {
                transform: translateX(15px);
            }
            100% {
                transform: translateX(0px);
            }
        }
    }

    /* --- 슬라이드 영역 --- */
    .visual-slider {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transform: translateY(100%);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .slide.active {
        opacity: 1;
        transform: translateY(0);
        z-index: 2;
        animation: slideUpIn 0.8s ease forwards;
    }

    .slide.exit {
        opacity: 0;
        transform: translateY(-100%);
        z-index: 1;
        animation: slideUpOut 0.8s ease forwards;
    }

    @keyframes slideUpIn {
        from {
            opacity: 0;
            transform: translateY(100%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideUpOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-100%);
        }
    }

    /* 네비게이션 버튼 */
    .visual-nav {
        z-index: 100;
        position: absolute;
        right: 40px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        row-gap: 40px;
        cursor: pointer;
        button {
            width: 50px;
            height: 50px;
            color: #fff;
            border: 1px solid #fff;
            outline-offset: 2px;
            border-radius: 50%;
            background: none;
            font-size: 24px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .active {
            box-shadow: 0 0 0 1px #fff;
            font-size: 28px;
            transform: scale(1.1);
        }
    }
`;
