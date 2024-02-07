// 라우터
const routes = require("express").Router();

// 모듈 가져오기
const {
  getOAuthSignin,
  getOAuthSignout,
  getKakaoToken,
} = require("./controllers");

routes.get("/api/v1/auth", getOAuthSignin);
routes.post("/api/v1/auth/signout", getOAuthSignout);
routes.post("/api/v1/token", getKakaoToken);
module.exports = routes;
