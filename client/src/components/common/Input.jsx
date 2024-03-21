// # style
import { S } from "@style";

const Input = ({ type, placeholder, value, onChange, autoComplete }) => {
  return (
    <S.InputWrapper>
      <S.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
    </S.InputWrapper>
  );
};

export default Input;
