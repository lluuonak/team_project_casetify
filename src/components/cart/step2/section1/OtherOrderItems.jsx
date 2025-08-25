import React from 'react';
import { OtherOrderItemsStyle } from './style';
import OtherOrderItem from './OtherOrderItem';

const OtherOrderItems = ({ data }) => {
    return (
        <OtherOrderItemsStyle>
            {data.map((item) => (
                <OtherOrderItem key={item.id} data={item} />
            ))}
        </OtherOrderItemsStyle>
    );
};

export default OtherOrderItems;
