import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import { OrderItemInfoStyle } from './style';

const OrderItemInfo = () => {
    const { orderList } = useSelector((state) => state.order);
    return (
        <OrderItemInfoStyle>
            <div className="top">
                <strong>주문상품 정보</strong>
            </div>
            <ul className="bottom">
                {orderList.map((item) => (
                    <OrderItem key={item.orderNo} data={item.items} orderNo={item.orderNo} />
                ))}
            </ul>
        </OrderItemInfoStyle>
    );
};

export default OrderItemInfo;
