import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';

<<<<<<< HEAD
import { Main, NotFiles } from "./pages";
import Ksports from "./pages/Ksports";
=======
import { Main, NotFiles, Colab, Animation } from './pages';
import Art from './components/colab/art';
>>>>>>> 12527db31567af59239ac7d755cc92b59d7b4bf6

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />

<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="Ksports" element={<Ksports />} />
            <Route path="*" element={<NotFiles />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
=======
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/colab" element={<Colab />}>
                            <Route path="animation" element={<Animation />} />
                            <Route path="art" element={<Art />} />
                            {/* <Route path="characters" element={<Characters />} />
                            <Route path="fashion" element={<Fashion />} />
                            <Route path="movie" element={<Movie />} />
                            <Route path="sports" element={<Sports />} /> */}
                        </Route>
                        <Route path="*" element={<NotFiles />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
>>>>>>> 12527db31567af59239ac7d755cc92b59d7b4bf6
};

export default App;
