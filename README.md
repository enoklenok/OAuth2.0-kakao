# OAuth2.0 - Kakao

## 소개

클라이언트(FE)는 'React', 서버(BE)는 'node Express'로
kakao의 OAuth2 소셜 로그인을 활용하여 로그인, 로그아웃 기능을 간단히 구현했습니다.

kakao에서 인가코드를 받아 서버에 전달하고, 서버에서 인가코드로 kakao의 엑세스/리프레시 토큰을 받아옵니다.
해당 토큰으로 유저의 정보를 가져오고, 서버에서 따로 엑세스/리프레시 토큰을 만들어 클라이언트에게 전달합니다.

이해하기 쉽도록 코드 내에서 주석으로 설명을 덧붙였습니다.

## 폴더 구조

## 실행 방법

### client(FE)

npm i
npm run start
npm start

### server(BE)

npm run dev

## 사용 라이브러리

### client(FE)

- react
- react-router-dom
- axios
- react-cookie

### server(BE)

- node
- express
- dotenv
- nodemon
- axios
- cors
- cookie-parser
- jsonwebtoken
