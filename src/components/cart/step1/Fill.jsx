import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { FillStyle } from './style';
import { useState } from 'react';
import { cartActions } from '../../../store/modules/cart/cartSlice';

const Fill = () => {
    const { cart, totalPrice } = useSelector((state) => state.cart);
    const [checkedItems, setCheckedItems] = useState([]);
    const dispatch = useDispatch();

    const handleAllToggle = () => {
        if (checkedItems.length === cart.length) {
            // 전체선택 해제
            setCheckedItems([]);
        } else {
            // 전체선택
            setCheckedItems(cart.map((item) => item.id));
        }
    };

    const handleItemToggle = (id) => {
        if (checkedItems.includes(id)) {
            setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
        } else {
            setCheckedItems([...checkedItems, id]);
        }
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
                        key={item.id}
                        data={item}
                        checked={checkedItems.includes(item.id)}
                        onToggle={() => handleItemToggle(item.id)}
                    />
                ))}
            </ul>
            <div className="total">
                <span>총 제품 가격</span>
                <span>₩{totalPrice.toLocaleString()}</span>
            </div>
            <div className="end-btns">
                <span>선택상품 주문 / 결제</span>
                <span>전체 주문 / 결제</span>
            </div>
        </FillStyle>
    );
};

export default Fill;
