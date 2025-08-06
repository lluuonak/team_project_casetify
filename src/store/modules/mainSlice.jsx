import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    logoShow: false,
    scrollState: 0,
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        openMenu: (state, action) => {
            if (state.scrollState < 1000) {
                state.logoShow = !state.logoShow;
            }
        },
        scollMove: (state, action) => {
            state.scrollState = action.payload;
        },
        disableLogo: (state) => {
            state.logoShow = !state.logoShow;
        },
    },
});

export const mainActions = mainSlice.actions;
export default mainSlice.reducer;
