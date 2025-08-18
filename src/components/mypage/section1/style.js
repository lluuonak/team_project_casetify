import styled from 'styled-components';

export const Section1Style = styled.section`
    width: 100%;
    height: auto;
    background: #1a1a1a;
    .inner {
        width: 1440px;
        height: auto;
        display: flex;
        flex-flow: column;
        gap: 60px;
        .mypage-gnb {
            display: flex;
            width: 100%;
            height: 50px;
            justify-content: space-between;
            align-items: center;
            .left {
                width: 171px;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .profile-img {
                    width: 50px;
                    height: 50px;
                    background: #d9d9d9;
                    border-radius: 100%;
                }
                .user-info {
                    display: flex;
                    width: auto;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    strong {
                        color: #fff;
                        font-size: 24px;
                    }
                    span {
                        color: #fff;
                        font-size: 20px;
                    }
                }
            }
            .right {
                width: 221px;
                height: 22px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 30px;
                a {
                    color: #888;
                    font-size: 12px;
                    border-radius: 50px;
                    border: 1px solid #888;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 22px;
                    line-height: 22px;
                }
                .edit {
                    width: 109px;
                }
                .logout {
                    width: 82px;
                }
            }
        }
    }
`;
