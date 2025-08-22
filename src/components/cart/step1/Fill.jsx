import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { FillStyle } from './style';
import { useState } from 'react';
import { cartActions } from '../../../store/modules/cart/cartSlice';
import { orderActions } from '../../../store/modules/cart/orderSlice';
import { useNavigate } from 'react-router-dom';
const Fill = () => {
    const { cart, totalPrice } = useSelector((state) => state.cart);
    const [checkedItems, setCheckedItems] = useState([]);
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const handleAllToggle = () => {
        if (checkedItems.length === cart.length) {
            // 전체선택 해제
            setCheckedItems([]);
        } else {
            // 전체선택
            setCheckedItems(cart.map((item) => item.cartId));
        }
    };

    const handleItemToggle = (id) => {
        if (checkedItems.includes(id)) {
            setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
        } else {
            setCheckedItems([...checkedItems, id]);
        }
    };

    const sendToOrder = () => {
        // 장바구니 목록에서 선택된 친구들만 주문목록으로 옮겨주기
        // 주문 처리가 완료 되면 장바구니 목록에서 삭제 시켜준다
        // 1.장바구니 목록에서 선택된 친구들 조회
        const selectItems = [];
        checkedItems.map((item) => selectItems.push(cart.find((item2) => item2.cartId === item)));
        dispatch(orderActions.setOrderList(selectItems));
        navigator('/cart/step2');
    };
    return (
        <FillStyle>
            <div className="nav-area">
                <span className="all" onClick={handleAllToggle}>
                    전체 선택
                </span>
                <span
                    className="del"
                    onClick={() => {
                        dispatch(cartActions.cartClear());
                    }}
                >
                    전체 삭제
                </span>
            </div>
            <ul className="list">
                {cart.map((item) => (
                    <CartItem
                        key={item.cartId}
                        data={item}
                        checked={checkedItems.includes(item.cartId)}
                        onToggle={() => handleItemToggle(item.cartId)}
                    />
                ))}
            </ul>
            <div className="total">
                <span>총 제품 가격</span>
                <span>₩{totalPrice.toLocaleString()}</span>
            </div>
            <div className="end-btns">
                <span onClick={sendToOrder}>선택상품 주문 / 결제</span>
                <span>전체 주문 / 결제</span>
            </div>
        </FillStyle>
    );
};

export default Fill;
