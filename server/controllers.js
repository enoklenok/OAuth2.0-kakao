// 함수
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const axios = require("axios");

const refreshTokens = [];
const users = [];
const client_id = process.env.CLIENT_ID; //rest-api-key
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

exports.getOAuthSignin = (req, res) => {
  // 1-1. 클라이언트의 OAuth 로그인 요청
  // 1-3. rest-api-key와 redirect_uri, response_type을 카카오 url의 쿼리로 넣어서 해당 uri를 클라이언트에게 응답
  const response_type = "code";
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize`;
  const kakaoUri = `${kakaoUrl}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`;
  const response = {
    message: "success",
    kakaoUri,
  };
  console.log(kakaoUri);
  res.status(200).json(response);
};

exports.getOAuthSignout = (req, res) => {
  console.log(req.body);
  res.clearCookie("refreshToken");
  res.status(201).json({ message: "remove success" });
};

exports.getKakaoToken = async (req, res) => {
  // 2-1. 클라이언트로부터 인가 코드 전달 받음
  // 2-2. 헤더에 Content-Type,
  // 바디에 grant_type, client_id, redirect_uri를 쿼리로 넣어서 token을 요청함.
  // * client_secret : ON 설정한 경우, 필수로 넣어줘야함

  //headers
  const ContentType =
    "Content-type: application/x-www-form-urlencoded;charset=utf-8";

  //body
  const { authorizationCode } = req.body;
  const grant_type = "authorization_code";
  const tokenUrl = `https://kauth.kakao.com/oauth/token`;
  const tokenUri = `${tokenUrl}?client_id=${client_id}&redirect_uri=${redirect_uri}&client_secret=${client_secret}&grant_type=${grant_type}&code=${authorizationCode}`;

  // response data
  const kakaoTokenInfo = await axios.post(tokenUri, {
    headers: { ContentType },
  });

  // ! 같은 인자코드로 2번 이상 요청 불가
  const {
    access_token,
    token_type,
    refresh_token,
    id_token,
    expires_in,
    scope,
    refresh_token_expires_in,
  } = kakaoTokenInfo.data;
  // 3-1. 발급받은 엑세스 토큰으로 유저 정보 요청/조회
  // 3-2. 유저 정보 저장 후, express 자체적인 토큰 발급하여 클라이언트에게 전달.

  const kakaoUserUrl = "https://kapi.kakao.com/v2/user/me";
  const userInfo = await axios.get(kakaoUserUrl, {
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `Bearer ${access_token}`,
    },
  });
  const userId = userInfo.data.id;
  const username = userInfo.data.properties.nickname;

  const accessToken = jwt.sign(
    {
      userId,
      username,
    },
    client_secret,
    { expiresIn: expires_in }
  );

  const refreshToken = jwt.sign(
    {
      userId,
      username,
    },
    client_secret,
    { expiresIn: refresh_token_expires_in }
  );
  console.log(accessToken, "accessToken");
  console.log(refreshToken, "refreshToken");
  res.cookie("accessToken", accessToken, { httpOnly: true });
  res.cookie("refreshToken", refreshToken, { httpOnly: true });
  res.status(201).json({ message: "token success", accessToken, refreshToken });
};
