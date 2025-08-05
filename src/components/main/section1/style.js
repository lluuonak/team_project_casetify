import styled from "styled-components";

export const Section1Style = styled.section`
    width: 100%;
    height: 1040px;
    video{
        
        position:relative;
    }
    .bg{
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height:730px;
        background-color: rgba(0, 0, 0, 0.5);
    }
    img{
        width: 199px;
        height: 70px;
        display: block;
        position:absolute;
        top: 36%;
        left : 50%;
        transform: translateX(-50%) translateY(-50%);
    }
`;