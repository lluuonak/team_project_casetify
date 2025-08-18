import { Link } from 'react-router-dom';
import { OrderItemStyle } from './style';

const OrderItem = () => {
    return (
        <OrderItemStyle>
            <div className="top">
                <div className="left">
                    <span>2025.08.02</span>
                    <span>주문번호 2024596854794</span>
                </div>
                <div className="right">
                    <Link className="item-btn">상세 보기</Link>
                </div>
            </div>
            <div className="middle">
                <div className="img-area"></div>
                <div className="text-area">
                    <div className="name">
                        <span>제품 ~~~ 외 5종</span>
                    </div>
                    <div className="price">
                        <span>총 토탈 가격</span>
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
