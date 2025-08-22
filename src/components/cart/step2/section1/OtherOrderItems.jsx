import React from 'react';
import { OtherOrderItemsStyle } from './style';
import OtherOrderItem from './OtherOrderItem';

const OtherOrderItems = () => {
    return (
        <OtherOrderItemsStyle>
            <OtherOrderItem />
            <OtherOrderItem />
            <OtherOrderItem />
            <OtherOrderItem />
        </OtherOrderItemsStyle>
    );
};

export default OtherOrderItems;
