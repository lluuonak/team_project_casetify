import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./styled/GlobalStyle";
import Layout from "./common/Layout";

import { Main, NotFiles } from "./pages";
import Ksports from "./pages/Ksports";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />

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
};

export default App;
