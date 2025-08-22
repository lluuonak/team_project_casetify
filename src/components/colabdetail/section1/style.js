import styled from 'styled-components';

export const Section1Style = styled.section`
    // 기존
    height: auto;
    position: relative;
    width: 100%;

    /* background: linear-gradient(to bottom, #1a1a1a, #0a0a0a); */
    /* background-image: url('../images/colab/1.png'); */
    background: transparent;
    /* background-position: 50% 50%; */
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    /* background-size: cover; */

    min-height: 100vh;
    padding: 60px 0;
    color: white;

    box-sizing: border-box;

    .before {
        margin-left: 50px;
        margin-top: 60px;
    }
    .container {
        margin: 0 auto;
        padding: 220px 0 150px 0;

        .title {
            text-align: center;
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 80px;
            letter-spacing: 0px;
            font-weight: 600;
        }

        .circles-wrapper {
            height: 480px;
            overflow: hidden;
            margin-bottom: 60px;
            cursor: grab;

            &:active {
                cursor: grabbing;
            }
        }

        .circles-container {
            display: flex;
            align-items: center;
            gap: 10px;
            height: 100%;
            will-change: transform;
            user-select: none;
        }
    }
`;

export const SingleCircleStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 480px;
    flex-shrink: 0;

    .circle {
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 480px;
        height: 480px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 2;
        }

        .title-text {
            color: white;
            font-size: 30px;
            font-weight: bold;
            text-align: center;
            padding: 0 20px;
            letter-spacing: 1px;
            pointer-events: none;
        }

        &:hover .overlay {
            opacity: 1;
        }
    }
`;

export const DoubleCircleStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 480px;
    flex-shrink: 0;

    .circle {
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 230px;
        height: 230px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 2;
        }

        .title-text {
            color: white;
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            padding: 0 20px;
            letter-spacing: 1px;
            pointer-events: none;
        }

        &:hover .overlay {
            opacity: 1;
        }
    }
`;
