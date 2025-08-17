import styled from 'styled-components';

export const Section1Style = styled.section`
    // 기존    
    height: 1005px !important;
    position: relative;
    width: 100%;

    background: #000;
    min-height: 100vh;
    padding: 60px 0;
    color: white;
    
    .container {
        margin: 0 auto;
        padding: 0 20px;
    }
    
    .title {
        text-align: center;
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 80px;
        letter-spacing: 8px;
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
    
`;

export const Section2Style = styled.section`
    .product-inner {
        .line {}
        span {}
        h3 {
            letter-spacing: -50px;
        }
    }
`;