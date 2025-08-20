import { createSlice } from '@reduxjs/toolkit';

/* 
    아이템 요소 분리가 제대로 이루어지지 않았기 때문에 
    detail 페이지에서 사용되는 데이터는 고정 데이터로 사용 될 수 있도록 처리 하였습니다.
 */
const initialState = {
    detailData: {},
};

export const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        getDetail: (state, action) => {
            // const { page, parentId, id } = action.payload;
            // switch (page) {
            //     case 'ksports':
            //         const parent = KsportsData.find((item) => item.id === parentId);
            //         const targetItem = parent.data.find((product) => product.id === id);
            //         state.detailData = targetItem;
            //         break;
            // }
        },
    },
});

export const detailActions = detailSlice.actions;
export default detailSlice.reducer;
