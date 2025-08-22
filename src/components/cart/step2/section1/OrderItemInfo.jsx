import OrderItem from './OrderItem';
import OtherOrderItems from './OtherOrderItems';
import { OrderItemInfoStyle } from './style';

const OrderItemInfo = () => {
    return (
        <OrderItemInfoStyle>
            <div className="top">
                <strong>주문상품 정보</strong>
            </div>
            <ul className="bottom">
                <OrderItem />
            </ul>
            <OtherOrderItems />
        </OrderItemInfoStyle>
    );
};

export default OrderItemInfo;
