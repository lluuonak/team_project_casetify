import { Routes, Route, useLocation, Router } from 'react-router-dom';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';

import { Cart, Colab, Ksports, Main, MyPage, NotFiles, Step2 } from './pages';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { mainActions } from './store/modules/main/mainSlice';
import Kcontent from './pages/Kcontent';
import Kart from './pages/Kart';
import Product from './pages/product';
import Step1 from './pages/cart/Step1';

const App = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(mainActions.setMainPage(location.pathname));
        dispatch(mainActions.pageDiff());
        window.scrollTo(0, 0);
    }, [location.pathname, dispatch]);
    return (
        <>
            <GlobalStyle />

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />

                    <Route path="/Ksports" element={<Ksports />} />
                    <Route path="/Kcontent" element={<Kcontent />} />
                    <Route path="/Kart" element={<Kart />} />
                    <Route path="/colab" element={<Colab />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/cart" element={<Cart />}>
                        <Route index element={<Navigate to="step1" replace />} />
                        <Route path="step1" element={<Step1 />} />
                        <Route path="step2" element={<Step2 />} />
                    </Route>

                    <Route path="*" element={<NotFiles />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
