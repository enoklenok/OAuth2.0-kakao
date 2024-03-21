// # lib
import axios from "axios";

// 환경변수
const PROTOCOL = process.env.REACT_APP_PROTOCOL;
const PORT = process.env.REACT_APP_PORT;
const SIGNIN_URL = process.env.REACT_APP_SIGNIN_URL;

const getOAuthSignin = async () => {
  // 1. express 서버에 로그인 요청
  const { kakaoUri } = (await axios.get(`${PROTOCOL}:${PORT}${SIGNIN_URL}`))
    .data;

  // 2. kakao 로그인 url을 받고, 현재 주소를 해당 url로 바꿈
  console.log(kakaoUri);
  document.location.href = kakaoUri;
};

export default getOAuthSignin;
