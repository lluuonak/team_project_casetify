import { createSlice } from '@reduxjs/toolkit';
import colabDetail from '../../../assets/colab/colabDetailData';
import newProduct from '../../../assets/colab/NewProductData';
import colabVisualData from '../../../assets/colab/colabVisualData'; // 추가

const initialState = {
    newProduct: newProduct,
    colabDetail: colabDetail,
    colabVisualData: colabVisualData, // 추가
};

export const colabSlice = createSlice({
    name: 'colab',
    initialState,
    reducers: {},
});

export const colabActions = colabSlice.actions;
export default colabSlice.reducer;
