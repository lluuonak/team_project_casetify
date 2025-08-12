import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import GlobalStyle from "./styled/GlobalStyle";
import Layout from "./common/Layout";

import { Colab, Main, NotFiles } from "./pages";
import Ksports from "./pages/Ksports";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { mainActions } from "./store/modules/main/mainSlice";

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
          <Route path="/colab" element={<Colab />} />

          <Route path="*" element={<NotFiles />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
