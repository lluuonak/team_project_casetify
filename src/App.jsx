import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';

import { Main, NotFiles, Colab, ColabDetail } from './pages';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />

                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/colab" element={<Colab />} />
                        {/* <Route path="animation" element={<Animation />} />
                            <Route path="art" element={<Art />} />
                            {/* <Route path="characters" element={<Characters />} />
                            <Route path="fashion" element={<Fashion />} />
                            <Route path="movie" element={<Movie />} />
                            <Route path="sports" element={<Sports />} />
                            </Route>*/}
                        {/* colabDetail을 따로 만들지 말고 colab/1 이런식으로 id로 구분하는거는 ?? 
                            페이지 완성하면서 api 다루게 되면 그때 보기*/}
                        <Route path="/colabdetail" element={<ColabDetail />}>
                            {/* <Route path="/:id" /> */}
                        </Route>
                        <Route path="*" element={<NotFiles />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
