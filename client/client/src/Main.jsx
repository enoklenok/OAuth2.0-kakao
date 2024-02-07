//lib
import { useContext } from "react";
import axios from "axios";

//module
import { removeCookie } from "./cookie/cookie";
import { AccessTokenDispatch } from "./App";

const Main = ({ accessToken }) => {
  const dispatch = useContext(AccessTokenDispatch);

  // 1-1. 카카오톡 로그인 버튼 클릭시, express서버에서 카카오톡 로그인 uri를 전달받음.
  // 1-2. 해당 uri로 들어가서 로그인 시, redirect uri 라우터 컴포넌트로 이동

  const navRedirectUri = async () => {
    const { kakaoUri } = (await axios.get("http://localhost:3001/api/v1/auth"))
      .data;
    document.location.href = kakaoUri;
  };

  // 2-1. 로그아웃 시, 엑세스 토큰과 리프레시 토큰 초기화
  const getSignout = () => {
    axios.post("http://localhost:3001/api/v1/auth/signout");
    dispatch({ type: "REMOVE_TOKEN", accessToken: "" });
    removeCookie("refreshToken");
  };

  return (
    <div>
      {accessToken ? (
        <>
          <h1>MAIN : 소셜 로그인 성공</h1>
          <button onClick={getSignout}>로그아웃</button>
        </>
      ) : (
        <>
          <h1>MAIN : 로그인 실패</h1>
          <button onClick={navRedirectUri}>카카오톡 로그인</button>
        </>
      )}
    </div>
  );
};

export default Main;
