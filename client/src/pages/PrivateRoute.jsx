// # lib
import { Outlet, Navigate } from "react-router-dom";

// # layout
import { Layout } from "@layout";

// # store
import { tokenStore } from "@store";

const PrivateRoute = () => {
  const { accessToken } = tokenStore();

  return accessToken ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;
