import styled from 'styled-components';

export const Section1Style = styled.section`
    height: 1005px !important;
    position: relative;
    .prev-icon {
        position: absolute;
        left: 60px;
        top: 80px;
    }
    h2 {
        font-size: 48px;
        font-weight: 500;
        color: #fff;
        text-align: center;
        padding-top: 200px;
        box-sizing: border-box;
    }
    .marquee-wrapper {
        position: relative;
    }

    .marquee {
        display: flex;
        gap: 30px;
        overflow: hidden;
    }

    .marquee-item {
        position: relative;
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow: hidden;
    }

    .member {
        width: 100%;
    }

    .member-link {
        display: block;
    }

    .member-img-wrapper {
        margin: 0;
    }

    .member-img {
        display: block;
        width: 100%;
        height: 300px;
        object-fit: cover;
        filter: grayscale(100%);
        transition: filter 0.3s;
    }

    .member-details {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 20px;
        text-align: center;
        background: rgba(0, 0, 0, 0.35);
        transform: translateY(100%);
        transition: transform 0.3s;
    }

    .member-title {
        margin: 0 0 5px;
    }

    .member-subtitle {
        margin: 0;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.5);
    }

    .member-link:hover .member-details {
        transform: none;
    }

    .member-link:hover .member-img {
        filter: grayscale(0);
    }

    .marquee-arrow {
        position: absolute;
        bottom: -60px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: #dc2f02;
        border: none;
        cursor: pointer;
        transition: all 0.2s;
    }

    .marquee-arrow.arrow-prev {
        left: calc(50% - 50px);
    }

    .marquee-arrow.arrow-next {
        right: calc(50% - 50px);
    }

    @media (min-width: 850px) {
        .marquee-item {
            width: 500px;
        }

        .member-img {
            height: 500px;
        }

        .member-title {
            font-size: 1.6em;
        }

        .marquee-arrow {
            top: 50%;
            transform: translateY(-50%);
            width: 70px;
            height: 70px;
        }

        .marquee-arrow.arrow-prev {
            left: 40px;
        }

        .marquee-arrow.arrow-next {
            right: 40px;
        }
    }
`;
