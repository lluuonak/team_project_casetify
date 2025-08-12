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
        gap: 60px;

        .left{
            width: 362px;
            height: 740px;
            display: flex;
            flex-flow:column;
            justify-content:flex-start;
            gap:40px;

            .l-1st{

                width: 360px;
                height: 260px;
                background: rgba(136, 136, 136, 0.30);
                border-radius:20px;
                position:relative;
                overflow:hidden;
                img{
                    width: 259px;
                    height: 259px;
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
                height: 200px;
                margin-left: 79px;
                background: rgba(136, 136, 136, 0.30);
                border-radius:20px;
                position:relative;
                overflow:hidden;
                img{
                    width: 253px;
                    height: 253px;
                    position:absolute;
                    top:25px;
                    left: -51px;
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
                height: 200px;
                background: rgba(136, 136, 136, 0.30);
                border-radius:20px;
                overflow:hidden;
                position:relative;
                margin-left:42px;
                img{
                    width: 252px;
                    height: 252px;
                    position:absolute; 
                    top: -22px;
                    left: -25px;
                    
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
            gap:60px;

            .r_1st{
                width: 100%;
                height: 209px;
                a{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-flow: column;
                    gap:40px;
                    .text-area{
                        display: flex;
                        flex-flow:column;
                        gap:30px;
                        span{
                            display: block;
                            color: #FFF;
                            font-size: 20px;
                        }
                        strong{
                            display: block;
                            color: #FFF;
                            text-align: center;
                            font-size: 64px;
                            font-weight: 600;
                            line-height: 80px;
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
                width: 100%;
                height: 241px;
                background: rgba(136, 136, 136, 0.30);
                border-radius:20px;
                overflow:hidden;
                position:relative;
                img{
                    position:absolute;
                    left: -40px;
                    top: -51px;
                    width: 361px;
                    height: 361px;
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
                width: 260px;
                height: 200px;
                background: rgba(136, 136, 136, 0.30);
                border-radius:20px;
                overflow:hidden;
                position:relative;
                img{
                    position:absolute;
                    top: 20px;
                    right: 3px;
                    width: 225px;
                    height: 225px;
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
                width: 340px;
                height: 250px;
                background: rgba(136, 136, 136, 0.30);
                border-radius:20px;
                overflow:hidden;
                position:relative;
                img{
                    position:absolute;
                    top: 32px;
                    left: 0;
                    width: 355px;
                    height: 355px;
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
        left: 55%;
        bottom: 112px;
        transform:translate(-50%);
        z-index: 2;
    }
    .bg-img2{
        width: 900px;
        height: 900px;
        position:absolute;
        right: -514px;
        bottom: 298px;
        transform:translate(-50%)
    }
`;
