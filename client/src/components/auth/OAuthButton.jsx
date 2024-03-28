// # style
import { S } from "@style";

// utils
import { getOAuthSignin } from "@utils/api";

const OAuthButton = () => {
  const buttonText = "카카오 소셜 로그인";
  return <S.OAuthButton onClick={getOAuthSignin}>{buttonText}</S.OAuthButton>;
};

export default OAuthButton;
