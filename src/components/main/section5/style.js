import styled from 'styled-components';


export const Section5Style = styled.section`
    position:relative;
    
    ul{
        width: 842px;
        height: 1040px;
        position:absolute;
        top: 0;
        left: 74px;
        display: flex;
        gap: 40px;

        .left{
            width: 362px;
            height: 740px;
            display: flex;
            flex-flow:column;
            justify-content:flex-start;
            gap:20px;

            .l-1st{
                width: 360px;
                height: 210px;
                background: rgba(136, 136, 136, 0.30);
                border-radius:20px;
                position:relative;
                overflow:hidden;
                img{
                    width: 260px;
                    height: 260px;
                    position:absolute;
                    top: 16px;
                    left: 0;
                    transform:scaleX(-1);
                }
                span{
                    color: #FFF;
                    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.10);
                    font-size: 20px;
                    position:absolute;
                    top: 33px;
                    right: 41px;
                }
            }
            .l-2nd{
                width: 280px;
                height: 160px;
                margin-left: 79px;
                background: rgba(136, 136, 136, 0.30);
                border-radius:20px;
                position:relative;
                overflow:hidden;
                img{
                    width: 200px;
                    height: 200px;
                    position:absolute;
                    top: -18px;
                    left: -14px;
                }
                .text-box{
                    display: flex;
                    flex-flow:column;
                    position:absolute;
                    top: 20px;
                    right: 16px;
                    span{
                        display: block;
                        color: #FFF;
                        text-align: right;
                        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.10);
                        font-size: 20px;
                        
                        
                    }
                }
            }
            .l-3rd{
                width: 320px;
                height: 170px;
                background: rgba(136, 136, 136, 0.30);
                border-radius:20px;
                overflow:hidden;
                position:relative;
                margin-left:42px;
                img{
                    width: 202px;
                    height: 202px;
                    position:absolute; 
                    top: -12px;
                    left: 5px;
                    
                }
                .text-box{
                    display: flex;
                    flex-flow:column;
                    position:absolute;
                    top: 20px;
                    right: 18px;
                    span{
                        display: block;
                        color: #FFF;
                        text-align: right;
                        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.10);
                        font-size: 20px;
                        
                        
                    }
                }
            }

        }
        .right{
            width: 420px;
            height: 1040px;
            display: flex;
            flex-flow:column;
            gap:20px;

            .r_1st{
                width: 100%;
                height: 137px;
                a{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-flow: column;
                    .text-area{
                        display: flex;
                        flex-flow:column;
                        span{
                            display: block;
                            color: #FFF;
                            font-size: 20px;
                        }
                        strong{
                            display: block;
                            color: #FFF;
                            text-align: left;
                            font-size: 40px;
                            font-weight: 600;
                        }
                    }
                    .more{
                        color: #FFF;
                        font-size: 16px;
                        width: 147px;
                        height: 35px;
                        border-radius: 50px;
                        border: 1px solid #FFF;
                        display: flex;
                        justify-content: center;
                        align-items : center;                        
                        box-sizing:border-box;
                    }
                    
                }
            }
            .r_2nd{
                width: 360px;
                height: 200px;
                background: rgba(136, 136, 136, 0.30);
                border-radius:20px;
                overflow:hidden;
                position:relative;
                img{
                    position:absolute;
                    left: -37px;
                    top: -42px;
                    width: 280px;
                    height: 280px;
                }
                .text-area{
                    position:absolute;
                    right: 29px;
                    top: 38px;
                    span{
                        display: block;
                        color: #FFF;
                        text-align: right;
                        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.10);
                        font-size: 24px;
                    }
                }
            }
            .r_3rd{
                width: 220px;
                height: 170px;
                background: rgba(136, 136, 136, 0.30);
                border-radius:20px;
                overflow:hidden;
                position:relative;
                img{
                    position:absolute;
                    top: -10px;
                    right: -29px;
                    width: 205px;
                    height: 205px;
                }
                .text-area{
                    position:absolute;
                    left: 20px;
                    top: 20px;
                    span{
                        display: block;
                        color: #FFF;
                        text-align: left;
                        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.10);
                        font-size: 20px;
                    }
                }
            }
            .r_4th{
                width: 286px;
                height: 210px;
                background: rgba(136, 136, 136, 0.30);
                border-radius:20px;
                overflow:hidden;
                position:relative;
                img{
                    position:absolute;
                    top: 32px;
                    left: 0;
                    width: 295px;
                    height: 295px;
                }
                .text-area{
                    position:absolute;
                    left: 20px;
                    top: 20px;
                    span{
                        display: block;
                        color: #FFF;
                        text-align: left;
                        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.10);
                        font-size: 20px;
                    }
                }
            }
        }
    }

    .bg-img1{
        position:absolute;
        width: 1043px;
        height: 383px;
        left: 51%;
        bottom: 378px;
        transform:translate(-50%);
        z-index: 2;
    }
    .bg-img2{
        width: 600px;
        height: 600px;
        position:absolute;
        right: -145px;
        bottom: 527px;
        transform:translate(-50%)
    }
`;
