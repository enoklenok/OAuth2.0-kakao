// # lib
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// # components
import { Button, Input } from "@components/common";

// # utils
import { getOAuthSignin } from "@utils/api";

// # store
import { tokenStore } from "@store";
// # style
import { S } from "@style";

const Signin = () => {
  const { accessToken } = tokenStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) navigate("/");
  }, [accessToken, navigate]);

  return (
    <S.RootContainer>
      <S.Signin>
        <h1>Signin</h1>
        <form action="">
          <Input type="email" placeholder="아이디를 입력하세요" />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            autoComplete="on"
          />
          <Button value="로그인" />
        </form>
        <Button type="kakao" value="카카오 로그인" onClick={getOAuthSignin} />
      </S.Signin>
    </S.RootContainer>
  );
};

export default Signin;
