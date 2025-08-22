import { useSelector } from 'react-redux';
import { Section3Style } from './style';

const Section3 = () => {
    const { orderList } = useSelector((state) => state.order);
    let totalPrice = 0;
    const currentData = orderList.filter((item) => item.isComplete === false);
    const items = currentData[0].items;
    items.map((item) => (totalPrice += item.price));
    return (
        <Section3Style>
            <div className="inner">
                <h3>최종 결제금액</h3>
                <div className="payment-info">
                    <div className="part">
                        <strong className="title">총 상품 금액</strong>
                        <span className="price">{totalPrice.toLocaleString()} 원</span>
                    </div>
                    <div className="part">
                        <div className="two-column">
                            <strong className="title">배송 정보</strong>
                            <span className="price">(5만원 이상 무료배송)</span>
                        </div>
                        <span className="price">+0 원</span>
                    </div>
                    <div className="part">
                        <strong className="title">할인 / 포인트 사용 금액</strong>
                        <span className="price">-0 원</span>
                    </div>
                </div>
                <div className="result-info">
                    <p>
                        <strong className="title">총 결제 금액</strong>
                        <span className="price">{totalPrice.toLocaleString()} 원</span>
                    </p>
                </div>
            </div>
        </Section3Style>
    );
};

export default Section3;
