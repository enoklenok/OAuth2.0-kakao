# OAuth2.0 - Kakao

## 소개

클라이언트(FE)는 'React', 서버(BE)는 'node Express'로 <br/>
kakao의 OAuth2 소셜 로그인을 활용하여 로그인, 로그아웃 기능을 간단히 구현했습니다.
<br/>
<br/>

kakao에서 인가코드를 받아 서버에 전달하고, 서버에서 인가코드로 kakao의 엑세스/리프레시 토큰을 받아옵니다. <br/>
해당 토큰으로 유저의 정보를 가져오고, 서버에서 따로 엑세스/리프레시 토큰을 만들어 클라이언트에게 전달합니다. <br/>
<br/>
이해하기 쉽도록 코드 내에서 주석으로 설명을 덧붙였습니다. <br/>

## client(FE)

### 실행

```
npm i
npm run start
```

### 라이브러리

- react
- react-router-dom
- react-cookie
- react-hook-form
- axios (통신)
- styled-components (스타일)
- zustand (클라이언트 전역 상태 관리)

## server(BE)

PORT='3001'으로 설정되어있고, <br/>
ClientId, ClientSecret, RedirectUri는 카카오 디벨롭스 사이트에서 등록하셔서 <br/>테스트해보시면 되겠습니다.

### 실행

```
npm run dev
```

### 라이브러리

- node
- express
- dotenv
- nodemon
- axios
- cors
- cookie-parser
- jsonwebtoken
