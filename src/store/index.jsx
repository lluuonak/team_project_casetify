import { configureStore } from '@reduxjs/toolkit';
import header from './modules/headerSlice';
import main from './modules/mainSlice';
const store = configureStore({
    reducer: {
        main,
        header,
    },
});

export default store;
