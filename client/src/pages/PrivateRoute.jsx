// # lib
import { Outlet, Navigate } from "react-router-dom";

// # layout
import { Layout } from "@layout";

// # pages
import { Main } from "@pages";
// # store
import { tokenStore } from "@store";

const PrivateRoute = () => {
  // const { accessToken } = tokenStore();
  const accessToken = "token";
  return accessToken ? (
    // <Layout>
    //   <Outlet />
    // </Layout>
    <Main />
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;
