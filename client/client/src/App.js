//lib
import { createContext, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

//module
import authReducer from "./reducer/authReducer";

//components
import Main from "./Main";
import RedirectComponent from "./redirect/RedirectComponent";

export const AccessTokenDispatch = createContext(null);
const App = () => {
  const initialValue = "";
  const [accessToken, dispatch] = useReducer(authReducer, initialValue);
  return (
    <AccessTokenDispatch.Provider value={dispatch}>
      <CookiesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main accessToken={accessToken} />} />
            <Route
              path="/oauth/kakao/callback"
              element={<RedirectComponent accessToken={accessToken} />}
            />
          </Routes>
        </Router>
      </CookiesProvider>
    </AccessTokenDispatch.Provider>
  );
};
export default App;
