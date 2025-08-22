import OrderNav from '../../../orderNav';
import Banner from '../../step1/Banner';
import { Section1Style } from './style';

const Section1 = ({ formData }) => {
    const mainData = formData.orderItem.items[0];
    const orderNo = formData.orderItem.orderNo;

    const totalPrice = formData.orderItem.items.reduce((sum, item) => sum + Number(item.price), 0);

    const getDate = () => {
        const today = new Date();

        // 년, 월, 일 추출
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0~11이므로 +1
        const day = String(today.getDate()).padStart(2, '0');

        return `${year}.${month}.${day}`;
    };
    return (
        <Section1Style>
            <div className="inner">
                <OrderNav page={'complete'} />
                <div className="info-area">
                    <div className="title">
                        <h3>주문완료</h3>
                        <h4>주문이 정상적으로 완료되었습니다</h4>
                    </div>
                    <div className="btn-area">
                        <span>쇼핑 계속하기</span>
                        <span>주문내역 확인</span>
                    </div>
                    <div className="oder-area">
                        <div className="order-info">
                            <span>{getDate()}</span>
                            <div className="order-no">
                                <span>주문번호</span>
                                <span>{orderNo}</span>
                            </div>
                        </div>
                        <div className="order-item">
                            <div className="img">
                                <img
                                    src={`/images/detail/phone/${mainData.folder}/1.webp`}
                                    alt=""
                                />
                            </div>
                            <div className="item-info">
                                <span className="name">
                                    {mainData.name} 외 {formData.orderItem.items.length - 1} 종
                                </span>
                                <span className="price">{totalPrice.toLocaleString()} 원</span>
                            </div>
                        </div>
                        <div className="order-info-detail">
                            <div className="part first">
                                <strong>주문현황</strong>
                                <span>결제 완료</span>
                            </div>
                            <div className="part second">
                                <strong>결제방법</strong>
                                <span>무통장 입금</span>
                            </div>
                            <div className="part third">
                                <strong>배송지 정보</strong>
                                <div className="user-info">
                                    <span>{formData.name}</span>
                                    <span>{formData.phone}</span>
                                    <span>
                                        {formData.address} {formData.addressDetail}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Banner />
        </Section1Style>
    );
};

export default Section1;
