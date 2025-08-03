import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./styled/GlobalStyle";
import Layout from "./common/Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<NotFiles />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
