import { configureStore } from '@reduxjs/toolkit';
import header from './modules/common/headerSlice';
import main from './modules/main/mainSlice';
import section4 from './modules/main/section4Slice';
const store = configureStore({
    reducer: {
        main,
        header,
        section4,
    },
});

export default store;
