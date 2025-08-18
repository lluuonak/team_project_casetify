import styled from 'styled-components';

export const Section1Style = styled.div`
    background-color: black;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .title-wrap {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 48px;
        .title-box {
            text-align: center;
            transition: all 0.5s ease-in-out;
            transform: ${(props) => (props.isAnimating ? 'translateY(64px)' : 'translateY(0)')};
            opacity: ${(props) => (props.isAnimating ? '0' : '1')};
            h2 {
                color: white;
                font-size: 56px;
                font-weight: 700;
                /* margin-bottom: 24px; */
            }
            p {
                color: white;
                font-size: 24px;
                font-weight: 600;
            }
        }
    }
    .product-wrap {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        .product-box {
            display: flex;
            gap: 80px;
            transition: all 0.5s ease-in-out;
            transform: ${(props) => (props.isAnimating ? 'translateY(64px)' : 'translateY(0)')};
            opacity: ${(props) => (props.isAnimating ? '0' : '1')};
            .product-box-each {
                width: 240px;
                height: 370px;
                background-color: white;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                padding: 24px;
                position: relative;
                overflow: hidden;
                border-radius: 8px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    object-fit: contain;
                    object-position: center;
                    width: 370px;
                    height: 370px;
                }
                .product-info {
                    background-color: rgba(0, 0, 0, 0.75);
                    padding: 16px;
                    border-radius: 8px;
                    position: relative;
                    z-index: 10;
                    h3 {
                        color: white;
                        font-size: 0.875rem;
                        font-weight: 600;
                        margin-bottom: 8px;
                        line-height: 1.4;
                    }
                    p {
                        color: white;
                        font-size: 1.125rem;
                        font-weight: 700;
                    }
                }
            }
        }
    }
`;
