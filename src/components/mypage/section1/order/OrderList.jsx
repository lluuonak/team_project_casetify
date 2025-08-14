import { Link } from 'react-router-dom';
import { OrderListStyle } from './style';
import OrderItem from './OrderItem';

const OrderList = () => {
    return (
        <OrderListStyle>
            <div className="title-area">
                <strong>주문내역 조회</strong>
            </div>
            <ul className="list">
                <OrderItem />
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
