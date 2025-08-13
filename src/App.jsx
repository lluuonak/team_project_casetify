import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';

import { Colab, ColabDetail, Main, NotFiles } from './pages';
import Ksports from './pages/Ksports';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />

                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />

                        <Route path="/Ksports" element={<Ksports />} />
                        <Route path="/colab" element={<Colab />} />
                        <Route path="/colabdetail/:id" element={<ColabDetail />} />
                        <Route
                            path="/colabdetail"
                            element={<Navigate to="/colabdetail/animation" />}
                        />
                        <Route path="*" element={<NotFiles />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
