// # lib
import axios from "axios";

// # util
import { removeCookie } from "../cookie";

const PROTOCOL = process.env.REACT_APP_PROTOCOL;
const PORT = process.env.REACT_APP_PORT;
const SIGNOUT_URL = process.env.REACT_APP_SIGNOUT_URL;

// 2-1. 로그아웃 시, 엑세스 토큰과 리프레시 토큰 초기화
const getSignout = () => {
  axios.post(`${PROTOCOL}:${PORT}${SIGNOUT_URL}`);
  // dispatch({ type: "REMOVE_TOKEN", accessToken: "" });
  removeCookie("refreshToken", {
    path: "/",
  });
};

export default getSignout;
