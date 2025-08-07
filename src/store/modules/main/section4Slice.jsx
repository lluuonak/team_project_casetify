import { createSlice } from '@reduxjs/toolkit';
import dataList from '../../../assets/section4Data';
const initialState = {
    contentList: dataList,
};

export const section4Slice = createSlice({
    name: 'section4',
    initialState,
    reducers: {
        clickLikeBtn: (state, action) => {
            const { parentId, id } = action.payload;
            const parent = state.contentList.find((item) => item.id === parentId);
            const target = parent.data.find((child) => child.id === id);
            target.like = !target.like;
        },
    },
});

export const section4Actions = section4Slice.actions;
export default section4Slice.reducer;
