// # lib
import axios from "axios";

// # components
import { Button } from "@components/common";

// # store
import { tokenStore } from "@store";

// # util
import { removeCookie } from "@utils/cookie";

const PROTOCOL = process.env.REACT_APP_PROTOCOL;
const PORT = process.env.REACT_APP_PORT;
const SIGNOUT_URL = process.env.REACT_APP_SIGNOUT_URL;

const LogoutButton = () => {
  const { resetToken } = tokenStore();

  const getOAuthSignout = () => {
    axios.post(`${PROTOCOL}:${PORT}${SIGNOUT_URL}`);
    resetToken();
    removeCookie("refreshToken", {
      path: "/",
    });
  };

  return <Button value="로그아웃" onClick={getOAuthSignout} />;
};

export default LogoutButton;
