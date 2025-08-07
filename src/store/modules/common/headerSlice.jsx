import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    opacityState: false,
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setOpacityState: (state, action) => {
            state.opacityState = !state.opacityState;
        },
        scollOpacity: (state, action) => {
            state.opacityState = action.payload;
        },
    },
});

export const headerActions = headerSlice.actions;
export default headerSlice.reducer;
