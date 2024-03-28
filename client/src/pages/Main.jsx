import { SigninTitle } from "@components/auth";
// # store
import { tokenStore } from "@store";
// # style
import { S } from "@style";

const Main = () => {
  const { accessToken } = tokenStore();
  return (
    <S.RootContainer>
      <S.Signin>
        <SigninTitle title="로그인 성공" />
        엑세스 토큰 : {accessToken}
      </S.Signin>
    </S.RootContainer>
  );
};

export default Main;
