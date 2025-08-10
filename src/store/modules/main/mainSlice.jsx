import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    mainPage: false,
    headerShow: true,
    scrollY: 0,
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setScrollY: (state, action) => {
            state.scrollY = action.payload;
        },
        setMainPage: (state) => {
            state.mainPage = true;
        },
        setHeaderShow: (state, action) => {
            if (state.mainPage) {
                if (action.payload > 500) {
                    state.headerShow = true;
                } else {
                    state.headerShow = false;
                }
            }
        },
        clickMenu: (state, action) => {
            const menuOpen = !action.payload;
            //현재 메인페이지에서 메뉴 오픈 한 경우
            if (state.mainPage) {
                if (menuOpen) {
                    //메뉴가 열려 있는 경우
                    state.headerShow = true;
                } else {
                    //메뉴가 닫혀 있는 경우
                    if (state.scrollY > 500) {
                        state.headerShow = true;
                    } else {
                        state.headerShow = false;
                    }
                }
            }
            //메인페이지가 아닌 경우에는 항상 headerShow는 true
        },
    },
});

export const mainActions = mainSlice.actions;
export default mainSlice.reducer;
