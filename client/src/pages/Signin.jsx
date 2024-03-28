// # lib
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// # components
import { SigninTitle, SigninBox } from "@components/auth";

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
      <S.Signin title="로그인">
        <SigninTitle />
        <SigninBox />
      </S.Signin>
    </S.RootContainer>
  );
};

export default Signin;
