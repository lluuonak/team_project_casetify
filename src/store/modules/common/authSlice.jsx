import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    loginState: false,
    joinState: false,
    isLogin: localStorage.getItem('isLogin') || false,
    user: {},
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoginModalState: (state, action) => {
            state.loginState = action.payload;
        },
        setJoinModalState: (state, action) => {
            state.joinState = action.payload;
        },
        setLoginState: (state, action) => {
            state.isLogin = action.payload;
            localStorage.setItem('isLogin', JSON.stringify(state.isLogin));
        },
        setUserInfo: (state, action) => {
            state.user = action.payload;
        },
        setLogOut: (state, action) => {
            state.isLogin = false;
            localStorage.setItem('isLogin', JSON.stringify(state.isLogin));
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
