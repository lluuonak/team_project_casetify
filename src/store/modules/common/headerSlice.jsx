import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    opacityState: false,
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setOpacityState: (state, action) => {
            if (action.payload === 0) {
                console.log(`현재위치 0일때 : ${state.opacityState}`);
                if (state.opacityState) {
                    state.opacityState = false;
                } else {
                    state.opacityState = true;
                }
            }
        },
        scollOpacity: (state, action) => {
            console.log(action.payload);
            state.opacityState = action.payload;
        },
    },
});

export const headerActions = headerSlice.actions;
export default headerSlice.reducer;
