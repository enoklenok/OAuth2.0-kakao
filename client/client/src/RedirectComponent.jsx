//lib
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//module
import { setCookie } from "./cookie/cookie";
import { AccessTokenDispatch } from "./App";

const RedirectComponent = ({ accessToken }) => {
  const navigate = useNavigate();
  const dispatch = useContext(AccessTokenDispatch);

  useEffect(() => {
    const fetchAuthorizationCode = async () => {
      // 1-3. 컴포넌트의 uri에서 인가 코드를 뽑아서 express 서버로 전달
      const authorizationCode = new URL(
        document.location.toString()
      ).searchParams.get("code");
      try {
        const { data } = await axios.post(
          "http://localhost:3001/api/v1/token",
          {
            authorizationCode,
          }
        );
        const { accessToken, refreshToken } = data;
        console.log(refreshToken);
        //1-4. 엑세스 토큰을 전역 상태에 저장
        dispatch({ type: "SET_TOKEN", accessToken });
        //1-5. 리프레시 토큰을 쿠키에 저장
        setCookie("refreshToken", refreshToken, {
          path: "/",
          secure: true,
          maxAge: 300,
        });
        //1-6. 메인 페이지로 이동
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    };
    fetchAuthorizationCode();
  }, [dispatch, navigate]);

  return (
    <div>
      <h1>redirect uri 라우터 컴포넌트</h1>
    </div>
  );
};

export default RedirectComponent;
