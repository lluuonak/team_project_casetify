import { Link } from 'react-router-dom';
import { OrderListStyle } from './style';
import OrderItem from './OrderItem';
import { useSelector } from 'react-redux';

const OrderList = () => {
    const { orderList } = useSelector((state) => state.order);
    const completeList = orderList.filter((item) => item.isComplete === true);

    return (
        <OrderListStyle>
            <div className="title-area">
                <strong>주문내역 조회</strong>
            </div>
            <ul className="list">
                {completeList.map((item) => (
                    <OrderItem key={completeList.orderNo} data={item} />
                ))}
            </ul>
            <div className="bottom">
                <div className="btn-area">
                    <Link>교환 신청</Link>
                    <Link>반품 신청</Link>
                </div>
            </div>
        </OrderListStyle>
    );
};

export default OrderList;
