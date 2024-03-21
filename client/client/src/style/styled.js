// # lib
import styled from "styled-components";

const S = {};
export default S;

S.RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// signin
S.Signin = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 700px;
  height: 450px;
  border: 1px solid gray;
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

S.KakaoButton = styled(S.Button)`
  background-color: yellow;
`;

S.InputWrapper = styled.div`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 4px 8px;
`;

S.Input = styled.input`
  width: 100%;
  padding: 2px;
`;
