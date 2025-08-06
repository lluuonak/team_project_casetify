import styled from 'styled-components';

export const Section2Style = styled.section`
    background: #000;
    width: 100%;
    height: 840px;
    padding-bottom: 200px;
    .inner {
        margin: auto;
        width: 1600px;
        height: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        span {
            color: #fff;
            font-size: 20px;
        }
        .first-context {
            width: 172px;
            height: 48px;
        }
        .second-context {
            width: 148px;
            height: 24px;
        }
        .circle-wrapper {
            width: 200px;
            height: 200px;
            border-radius: 100%;
            background: linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0));
            /* padding: 2px; */
            &:hover {
                background: linear-gradient(135deg, #ff5b37, rgba(255, 255, 255, 0));
            }
        }
        .circle {
            position: absolute;
            right: 1px;
            top: 1px;
            width: 198px;
            height: 198px;
            border-radius: 50%;
            background-color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            .more {
                width: 149px;
                height: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                i {
                    width: 30px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
    .typo {
        width: 100%;
        height: 407px;
        position: relative;
        color: #fff;
        font-family: Prata;

        .left {
            display: block;
            position: absolute;
            top: 0;
            left: -33px;
            font-size: 120px;
        }
        .right {
            position: absolute;
            bottom: -136px;
            right: -33px;
            font-size: 300px;
        }
    }
`;

export const PhoneListStyle = styled.ul`
    margin-top: 24px;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
        width: 200px;
        height: 200px;
        background-color: #fff;
    }
    .rangle {
        border-radius: 80px;
    }
    .circle {
        border-radius: 100%;
    }
    .orange {
        background-color: #ff5b37;
    }
    .gray {
        background: #888;
    }
`;
