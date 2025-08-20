import React from 'react';
import { CartItemStyle } from './style';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/modules/cart/cartSlice';

const CartItem = ({ data, checked, onToggle }) => {
    const { id, name, category, phone, qty, price } = data;
    const dispatch = useDispatch();
    return (
        <CartItemStyle>
            <input type="checkbox" name="" id="" checked={checked} onChange={onToggle} />
            <div className="item">
                <div className="img"></div>
                <div className="info">
                    <div className="text">
                        <strong>{name}</strong>
                        <span>
                            {category} / {phone}
                        </span>
                    </div>
                    <span className="price">₩{price.toLocaleString()}</span>
                    <div className="qty">
                        <div className="btn" onClick={() => dispatch(cartActions.minusQty(id))}>
                            -
                        </div>
                        <div>{qty}</div>
                        <div className="btn" onClick={() => dispatch(cartActions.plusQty(id))}>
                            +
                        </div>
                    </div>
                    <i
                        className="del"
                        onClick={() => {
                            dispatch(cartActions.deleteCartItem(id));
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                        >
                            <path
                                d="M15 15L7.5 7.5M15 15L22.5 22.5M15 15L22.5 7.5M15 15L7.5 22.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </i>
                </div>
            </div>
        </CartItemStyle>
    );
};

export default CartItem;
