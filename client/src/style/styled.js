// # lib
import styled from "styled-components";

// # style
import CustomStyles from "./custom";

const { FlexCenter, FitScreen, FullScreen } = CustomStyles;

const S = {};
export default S;

// *#######################
// *###### COMMON ########
// *#####################

S.Container = styled.div`
  ${FlexCenter}
  ${FitScreen}
`;
S.FullContainer = styled(S.Container)`
  ${FullScreen}
`;

S.RootContainer = styled(S.FullContainer)`
  flex-direction: column;

  background-color: #fff;
`;

// *#######################
// *#### Signin.jsx ######
// *#####################

S.Signin = styled.main`
  ${FlexCenter}
  flex-direction: column;

  width: 700px;
  height: 450px;

  border-radius: 50px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 24px 24px 49px #d9d9d9, -24px -24px 49px #ffffff;
`;

S.SigninTitle = styled.h1`
  margin-bottom: 16px;

  background: linear-gradient(to bottom, #dfe2e8 0%, #c7cdd4 50%, #b2b7bd 100%);
  padding: 10px;
  border-radius: 10px;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

S.SigninBox = styled.div``;

S.OAuthButton = styled.button`
  background: transparent;
  color: black;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  padding: 20px 30px;
  perspective: 30rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.308);
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    background: linear-gradient(
      320deg,
      rgba(0, 140, 255, 0.678),
      rgba(128, 0, 128, 0.308)
    );
    z-index: 1;
    transition: background 3s;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

// *#######################
// *#### Main.jsx ######
// *#####################
S.MainContainer = styled(S.RootContainer)`
  background-color: #ffc2c2;
`;

S.Main = styled.main`
  flex-direction: column;

  width: 700px;
  height: 450px;

  border-radius: 50px;
  background: linear-gradient(145deg, #e6afaf, #ffd0d0);
  box-shadow: 20px 20px 60px #d9a5a5, -20px -20px 60px #ffdfdf;
`;

// * layout
S.Layout = styled.div`
  width: 100vw;
  height: 100vh;
`;

S.Header = styled.header`
  position: sticky;
  top: 0%;
  width: 100%;
  height: 80px;
  background-color: white;
  border-bottom: 1px solid gray;
`;
S.Sidebar = styled.aside`
  width: 200px;
  height: calc(100vh - 80px);
  background-color: white;
  border-right: 1px solid gray;
`;
S.Body = styled.div`
  display: flex;
`;
S.Main = styled.main``;

// * components > common
S.Button = styled.button`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 4px 8px;
`;

S.Input = styled.input`
  width: 100%;
  padding: 2px;
`;
// S.InputWrapper = styled.div`
//   border: 1px solid gray;
//   border-radius: 4px;
//   padding: 4px 8px;
// `;
