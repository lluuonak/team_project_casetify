import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cart: [
        {
            id: 1,
            name: 'BEARS Collage Case',
            category: 'Beige',
            phone: '아이폰 16 Pro Max',
            qty: 1,
            price: 96000,
        },
        {
            id: 2,
            name: 'BEARS Collage Case',
            category: 'Beige',
            phone: '아이폰 16 Pro Max',
            qty: 1,
            price: 96000,
        },
    ],
    totalPrice: 186600,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartClear: (state) => {
            state.cart = [];
        },
        addCartItem: (state, action) => {},
        plusQty: (state, action) => {
            const target = state.cart.find((item) => item.id === action.payload);
            target.qty += 1;
            state.totalPrice += target.price;
        },
        minusQty: (state, action) => {
            const target = state.cart.find((item) => item.id === action.payload);
            if (target.qty > 1) {
                target.qty -= 1;
                state.totalPrice -= target.price;
            }
        },
        deleteCartItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
