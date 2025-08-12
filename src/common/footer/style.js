import styled from "styled-components";

export const FooterStyle = styled.footer`
    width: 100%;
    height: 400px;
    background: #272727;
    display: flex;
    justify-content: center;
    align-items:center;
    color: #FFF;
    font-size: 20px;
    font-weight: 400;
    line-height: 40px; /* 200% */
    .inner{
        width: 1700px;
        height: 190px;
        display: flex;
        justify-content: space-between;
        align-items:center;
        .left{
            width: 300px;
            height: 106px;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            align-items:center;
            .sns{
                width: 100%;
                height: 36px;
                display: flex;
                justify-content:space-between;
                align-items:center;
                li{
                    width: 36px;
                    height: 100%;
                    a{  
                        width: 100%;
                        height: 100%;
                        display: block;
                        background-color: #fff;
                        border-radius:100%;
                        display: flex;
                        align-items:center;
                        justify-content:center;
                        img{
                            width: 20px;
                            height: 20px;
                            }
                    }
                 }
            }
        }
        .right{
            width: 1178px;
            height: 190px;
            display: flex;
            flex-flow: column;
            align-items:flex-end;
            gap:60px;
            .info{
                width: 100%;
                height: 90px;
                display: flex;
                flex-flow: column;
                align-items:flex-end;
                gap: 10px;
                span{
                    display: block;
                }
            }
            .strong{
                display: inline-block;
                color: #E3E3E3;
                font-size: 20px;
                font-weight: 400;
                line-height: 40px; /* 200% */
            }
        }

    }
`;