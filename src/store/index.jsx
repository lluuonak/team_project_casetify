import { configureStore } from '@reduxjs/toolkit';
import header from './modules/common/headerSlice';
import main from './modules/main/mainSlice';
import section4 from './modules/main/section4Slice';
import auth from './modules/common/authSlice';
import cart from './modules/cart/cartSlice';
import colab from './modules/colab/colabSlice';
import custom from './modules/customSlice';
import acc from './modules/acc/accSlice';
import detail from './modules/detail/detailSlice';
import order from './modules/cart/orderSlice';

const store = configureStore({
    reducer: {
        main,
        header,
        section4,
        auth,
        cart,
        colab,
        custom,
        acc,
        detail,
        order,
    },
});

export default store;
