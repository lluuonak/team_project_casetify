import { createSlice } from '@reduxjs/toolkit';

const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
    cart: cartStorage,
    wishList: JSON.parse(localStorage.getItem('wish')) || [],
    totalPrice: cartStorage.reduce((sum, item) => sum + Number(item.price), 0),
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        ////////////////////// CART ///////////////////
        cartClear: (state) => {
            localStorage.removeItem('cart');
            state.cart = [];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        addCartItem: (state, action) => {
            const data = state.cart.find((item) => item.id === action.payload.id);
            if (!data) {
                const cartId = state.cart.length + 1;
                const currentItem = { ...action.payload, cartId, qty: 1 };
                state.cart.push(currentItem);
            } else {
                const target = state.cart.find((item) => item.id === action.payload.id);
                target.qty += 1;
            }
            state.totalPrice += action.payload.price;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        plusQty: (state, action) => {
            const target = state.cart.find((item) => item.cartId === action.payload);
            target.qty += 1;
            state.totalPrice += target.price;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        minusQty: (state, action) => {
            const target = state.cart.find((item) => item.cartId === action.payload);
            if (target.qty > 1) {
                target.qty -= 1;
                state.totalPrice -= target.price;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        },
        deleteCartItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.cartId !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        ////////////////////// WISH ///////////////////
        addWishItem: (state, action) => {
            const data = state.wishList.find((item) => item.id === action.payload.id);
            if (!data) {
                const wishId = state.wishList.length + 1;
                const currentItem = { ...action.payload.caseData, wishId };
                state.wishList.push(currentItem);
                localStorage.setItem('wish', JSON.stringify(state.wishList));
            }
        },
        deleteWishItem: (state, action) => {
            state.wishList = state.wishList.filter((item) => item.wishId !== action.payload);
            localStorage.setItem('wish', JSON.stringify(state.wishList));
        },
        moveToCart: (state, action) => {
            const data = state.cart.find((item) => item.id === action.payload.id);
            if (!data) {
                const cartId = state.cart.length + 1;
                const currentItem = { ...action.payload, cartId, qty: 1 };
                state.cart.push(currentItem);
            } else {
                const target = state.cart.find((item) => item.id === action.payload.id);
                target.qty += 1;
            }
            state.totalPrice += action.payload.price;
            localStorage.setItem('cart', JSON.stringify(state.cart));
            state.wishList = state.wishList.filter((item) => item.wishId !== action.payload.wishId);
            localStorage.setItem('wish', JSON.stringify(state.wishList));
        },
        completeOrder: (state, action) => {
            const cartIds = action.payload;

            cartIds.map(
                (cartId) => (state.cart = state.cart.filter((item) => item.cartId !== cartId))
            );
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
