// # lib
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// # store
import { tokenStore } from "@store";

// # utils
import { setCookie } from "@utils/cookie";

const Redirect = () => {
  const PROTOCOL = process.env.REACT_APP_PROTOCOL;
  const PORT = process.env.REACT_APP_PORT;
  const TOKEN_URL = process.env.REACT_APP_TOKEN_URL;
  const setAccessToken = tokenStore((state) => state.setAccessToken);
  const navigate = useNavigate();

  const getAuthorizationCode = async () => {
    // 4. URI의 인가 코드 추출
    const authorizationCode = new URL(
      document.location.toString()
    ).searchParams.get("code");

    // 5. 추출 완료 시 서버로 전달
    try {
      const { data } = await axios.post(`${PROTOCOL}:${PORT}${TOKEN_URL}`, {
        authorizationCode,
      });

      // 6. 엑세스 토큰과 리프레시 토큰을 응답받음
      const { accessToken, refreshToken } = data;

      // 7. 전역 상태와 쿠키에 저장
      // 7-1. 엑세스 토큰 -> 전역상태 관리
      setAccessToken(accessToken);
      // 7-2. 리프레시 토큰 -> 쿠키 관리
      setCookie("refreshToken", refreshToken, {
        path: "/",
        secure: true,
        maxAge: 300,
      });
      // 8. 로그인 완료 화면으로 이동
      // navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAuthorizationCode();
  }, []);

  return (
    <div>
      <h1>Redirect URL</h1>
    </div>
  );
};

export default Redirect;
