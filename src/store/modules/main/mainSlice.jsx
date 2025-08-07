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
            if (state.scrollState < 500) {
                state.logoShow = !state.logoShow;
            } else {
                state.logoShow = true;
            }
        },
        scollMove: (state, action) => {
            state.scrollState = action.payload;
            if (state.scrollState > 500) {
                state.logoShow = true;
            }
        },
        disableLogo: (state) => {
            state.logoShow = false;
        },
    },
});

export const mainActions = mainSlice.actions;
export default mainSlice.reducer;
