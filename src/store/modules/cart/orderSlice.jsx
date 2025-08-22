import { createSlice } from '@reduxjs/toolkit';
const orderStorage = JSON.parse(localStorage.getItem('order')) || [];
const initialState = {
    orderList: orderStorage,
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrderList: (state, action) => {
            const currentYear = new Date().getFullYear();
            const orderIndex = state.orderList.length + 1;
            const paddedOrderNumber = String(orderIndex).padStart(9, '0');
            const orderNo = `${currentYear}${paddedOrderNumber}`;
            const data = { orderNo, items: action.payload, isComplete: false };
            state.orderList.push(data);
            localStorage.setItem('order', JSON.stringify(state.orderList));
        },
        completeOrder: (state, action) => {
            state.orderList = state.orderList.map((order) =>
                order.orderNo === action.payload ? { ...order, isComplete: true } : order
            );
            localStorage.setItem('order', JSON.stringify(state.orderList));
        },
    },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
