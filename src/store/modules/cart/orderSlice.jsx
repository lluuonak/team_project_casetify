import { createSlice } from '@reduxjs/toolkit';
const orderStorage = JSON.parse(localStorage.getItem('order')) || [];
const initialState = {
    orderList: orderStorage,
    isbusy: false,
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
            state.isbusy = true;
        },
        completeOrder: (state, action) => {
            const year = new Date().getFullYear();
            const month = String(new Date().getMonth() + 1).padStart(2, '0'); // 월: 01~12
            const day = String(new Date().getDate()).padStart(2, '0'); // 일: 01~31
            state.orderList = state.orderList.map((order) =>
                order.orderNo === action.payload
                    ? { ...order, isComplete: true, orderDate: year + '.' + month + '.' + day }
                    : order
            );
            localStorage.setItem('order', JSON.stringify(state.orderList));
        },
        setBusyControl: (state, action) => {
            state.isbusy = false;
        },
    },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
