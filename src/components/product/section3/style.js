import styled from 'styled-components';

export const Section3Style = styled.section`
    width: 1920px;
    height: auto;
    background-color: #1a1a1a;
    margin: 0 auto;
    margin-bottom: 200px;
    /* 헤더 스타일 */
    .title {
        width: 1200px;
        height: 40px;
        display: flex;
        margin: 0 auto;
        margin-bottom: 60px;
        .title-text {
            font-size: 32px;
            font-weight: 300;
            color: #fff;
        }
    }

    .subtitle {
        font-size: 18px;
        color: #666;
    }

    /* 필터 태그 스타일 */
    .filter-tags {
        width: 1200px;
        height: 35px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-bottom: 30px;
    }

    .tag {
        padding: 8px 20px;
        background-color: transparent;
        color: #888;
        border: 1px solid #555;
        border-radius: 20px;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.3s;

        &.active {
            background-color: #444;
            color: white;
        }

        &:hover {
            background-color: #555;
            color: white;
        }
    }

    /* MORE VIEW 버튼 스타일 */
    .more-view-container {
        text-align: center;
        margin-bottom: 0; /* 하단 마진 제거 */
    }

    .more-view-btn {
        padding: 12px 32px;
        background-color: transparent;
        border: 1px solid #dc2626;
        color: #dc2626;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 1px;
        cursor: pointer;
        text-transform: uppercase;
        transition: all 0.3s;

        &:hover {
            background-color: #dc2626;
            color: #fff;
        }
    }

    .product-item {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 1200px;
        gap: 80px;
        row-gap: 60px;
        margin: 60px auto;
    }
`;

export const ListItemStyle = styled.section`
    width: 240px;
    height: 100%;
    display: flex;
    flex-flow: column;
    gap: 20px;
    .img-bg {
        width: 100%;
        height: 370px;
        background-color: #fff;
        border-radius: 20px;
        position: relative;
        cursor: pointer;
        img {
            width: 366px;
            height: 351px;
            display: block;
            position: absolute;
            left: -26%;
            top: 7px;
            transition: transform 0.3s ease;
        }
        &:hover {
            img {
                width: 404px;
                height: 394px;
                left: -34%;
                top: -7px;
            }
        }
    }
    .info {
        width: 100%;
        height: 90px;
        color: #fff;
        padding: 0 20px;
        .name {
            height: 70px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 20px;
            font-weight: 500;
        }
        .price {
            display: block;
            font-size: 16px;
        }
    }
`;
