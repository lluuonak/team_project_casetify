import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    orderList: [],
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
        },
    },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
