import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    loginState: false,
    joinState: false,
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
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
