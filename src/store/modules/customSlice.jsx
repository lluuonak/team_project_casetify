import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    customState: false,
    customOptions: {},
};

export const customSlice = createSlice({
    name: 'custom',
    initialState,
    reducers: {
        // setCustomModalState: (state, action) => {
        //     state.customState = action.payload;
        // },
        setCustomState: (state, action) => {
            state.customState = action.payload;
        },
    },
});

export const customActions = customSlice.actions;
export default customSlice.reducer;
