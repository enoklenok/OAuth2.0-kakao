// #lib
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

// # pages
import {
  Redirect,
  Main,
  Notfound,
  Signin,
  PrivateRoute,
  Page1,
  Page2,
} from "@pages";

const App = () => {
  return (
    <CookiesProvider>
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/oauth/kakao/callback" element={<Redirect />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Main />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </CookiesProvider>
  );
};
export default App;
