import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';

import { Main, NotFiles, Colab, Animation, Movie, Sports, Fashion, Characters, Art } from './pages';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />

                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/colab" element={<Colab />}>
                            {/* <Route path="animation" element={<Animation />} />
                            <Route path="art" element={<Art />} />
                            <Route path="characters" element={<Characters />} />
                            <Route path="fashion" element={<Fashion />} />
                            <Route path="movie" element={<Movie />} />
                            <Route path="sports" element={<Sports />} /> */}
                        </Route>
                        <Route path="/colabDetail" element={<Colab />}>
                                <Route path='/:id'/>
                                {/* 여기서 id가 각 페이지에서 params 이용해서 바뀌며 같은 colabdetail 구조 안에 데이터만 바뀜 */}
                        </Route>
                        <Route path="*" element={<NotFiles />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
