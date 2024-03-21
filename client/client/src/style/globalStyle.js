import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}  

button {
  border : none;
  cursor: pointer;
};

input {
  border: none;
  outline: none;
}

h1 {  
  font-size: 48px;
  font-weight : 700;
}

h2 {
  font-size: 36px;
  font-weight : 600;
}
`;

export default GlobalStyle;
