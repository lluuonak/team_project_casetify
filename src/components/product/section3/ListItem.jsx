import React from 'react';
import { ListItemStyle } from './style';

const ListItem = ({ data, categoryId }) => {
    const { id, title, price, img } = data;

    return (
        <ListItemStyle>
            <div className="img-bg">
                <img src={img} alt={title} />
            </div>

            {/* 상품 정보 */}
            <div className="info">
                <strong className="name">{title}</strong>
                <span className="price">₩{parseInt(price.replace(',', '')).toLocaleString()}</span>
            </div>
        </ListItemStyle>
    );
};

export default ListItem;
