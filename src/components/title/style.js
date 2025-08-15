import styled from 'styled-components';

export const TitleSectionStyle = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    background-color: #1a1a1a;
    .common-title {
        width: 319px;
        height: 40px;
        margin-left: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        i {
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        h3 {
            width: 139px;
            height: 100%;
            color: #fff;
            text-align: center;
            font-size: 32px;
            font-weight: 600;
        }
    }
`;
