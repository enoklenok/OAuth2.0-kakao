// # layout
import { Header, Sidebar } from "@layout";

// # style
import { S } from "@style";

const Layout = ({ children }) => {
  return (
    <S.Layout>
      <Header />
      <S.Body>
        <Sidebar />
        <S.Main>{children}</S.Main>
      </S.Body>
    </S.Layout>
  );
};

export default Layout;
