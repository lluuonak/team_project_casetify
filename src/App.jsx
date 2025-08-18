import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';

import { Colab, Ksports, Main, MyPage, NotFiles } from './pages';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { mainActions } from './store/modules/main/mainSlice';
import Kcontent from './pages/Kcontent';
import Kart from './pages/Kart';

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

                    <Route path="*" element={<NotFiles />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
