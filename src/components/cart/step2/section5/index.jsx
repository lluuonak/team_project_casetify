import React from 'react';
import { Section5Style } from './style';
import { useNavigate } from 'react-router-dom';
import { FormValidate } from '../../../../utils/Order';
import { useDispatch } from 'react-redux';
import { orderActions } from '../../../../store/modules/cart/orderSlice';

const Section5 = ({ formData }) => {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = FormValidate(formData);
        switch (result.error) {
            case -1:
            case -2:
                alert(result.message);
                break;
            case 0:
                dispatch(orderActions.completeOrder(formData.orderItem.orderNo));
                // 장바구니에 담아놓은 품목들 장바구니에서 삭제 해주기

                // 주문완료 페이지로 이동하면서 데이터 전달
                navigator('/cart/step3', { state: { formData } });
                break;
        }
    };

    return (
        <Section5Style>
            <span className="order" onClick={handleSubmit}>
                주문 / 결제하기
            </span>
        </Section5Style>
    );
};

export default Section5;
