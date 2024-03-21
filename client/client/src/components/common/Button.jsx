// # style
import { S } from "@style";

const Button = ({ value, onClick, type }) => {
  if (type === "kakao") {
    return <S.KakaoButton onClick={onClick}>{value}</S.KakaoButton>;
  } else return <S.Button onClick={onClick}>{value}</S.Button>;
};

export default Button;
