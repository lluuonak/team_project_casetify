import { createSlice } from '@reduxjs/toolkit';
import accProductData from '../../../assets/acc/accProductData.js';
import accVisualData from '../../../assets/acc/accVisualData.js';

const categoryTitles = {
    wearable: 'Wearables & Device',
    charge: 'Charging & Power',
    protect: 'Protect & Support',
    style: 'Style & Keyring'
};

const initialState = {
    accProductData: accProductData,
    accVisualData: accVisualData,
    selectedVisualIndex: 0,
    currentCategoryTitle: categoryTitles.wearable,
};

export const accSlice = createSlice({
    name: 'acc',
    initialState,
    reducers: {
        setSelectedVisualIndex: (state, action) => {
            state.selectedVisualIndex = action.payload;
        },
        setCategoryTitle: (state, action) => {
            state.currentCategoryTitle = categoryTitles[action.payload] || categoryTitles.wearable;
        },
    },
});

export const accActions = accSlice.actions;
export default accSlice.reducer;