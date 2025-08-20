import { configureStore } from '@reduxjs/toolkit';
import header from './modules/common/headerSlice';
import main from './modules/main/mainSlice';
import section4 from './modules/main/section4Slice';
import auth from './modules/common/authSlice';
import cart from './modules/cart/cartSlice';
import colab from './modules/colab/colabSlice';
import custom from './modules/customSlice';
// custom 위치는 임시

const store = configureStore({
    reducer: {
        main,
        header,
        section4,
        auth,
        cart,
        colab,
        custom,
    },
});

export default store;
