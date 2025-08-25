import { Link } from 'react-router-dom';
import { OrderItemStyle } from './style';

const OrderItem = ({ data }) => {
    const mainData = data.items[0];
    const totalPrice = data.items.reduce((sum, item) => sum + Number(item.price), 0);
    const count = data.items.length;

    console.log(data);

    return (
        <OrderItemStyle>
            <div className="top">
                <div className="left">
                    <span>{data.orderDate}</span>
                    <span>주문번호 {data.orderNo}</span>
                </div>
                <div className="right">
                    <Link className="item-btn">상세 보기</Link>
                </div>
            </div>
            <div className="middle">
                <div className="img-area">
                    <img src={`/images/detail/phone/${mainData.folder}/1.webp`} alt="" />
                </div>
                <div className="text-area">
                    <div className="name">
                        {count > 1 && (
                            <span>
                                {mainData.name}외 {count - 1}종
                            </span>
                        )}
                        {count == 1 && <span>{mainData.name}</span>}
                    </div>
                    <div className="price">
                        <span>{totalPrice.toLocaleString()}</span>
                    </div>
                </div>
                <i className="delete-btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="30"
                        viewBox="0 0 31 30"
                        fill="none"
                    >
                        <path
                            d="M15.5 15L8 7.5M15.5 15L23 22.5M15.5 15L23 7.5M15.5 15L8 22.5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </i>
            </div>

            <div className="bottom">
                <div className="left">
                    <span>배송현황</span>
                    <span>배송완료</span>
                </div>
                <div className="right">
                    <Link className="item-btn">배송 조회</Link>
                </div>
            </div>
        </OrderItemStyle>
    );
};

export default OrderItem;
