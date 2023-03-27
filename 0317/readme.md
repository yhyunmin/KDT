#### `0317`

# Node.js

### 장점
* 스크립트 언어라 어느 환경에서도 동작
* 성능이 빠르고 좋음
*  배우기 쉬워요 ! 
*  JS 쓰는 개발자가 많음 !
### 단점
* 오류가 나면 서버를 꺼야함.


## npm 사용 하기
* npm init : 프로젝트를 시작할 때 사용하는 명령어  
  (package.json에 기록될 내용을 문답식으로 입력)
* npm init --yes : 생성될 때 기본값으로 설정한다 
* npm install 패키지 이름 : 패키지를 설치한다

## 패키지 관리 시작하기
* npm init을 하면, package.json 파일이 생성
* Node.js 관련 pacakge의 모든 정보는 json 파일안에 들어감.

 .. npm run test

### Express 
* 웹 서버를 생성하는 것 과 관련된 기능을 담당하는 프레임 워크
* 메소드와 미들웨어 등 내장 되어있음

* ### **HTTP 모듈 이용시 코드의 가독성, 확장성 둘다 안좋음 ➡  EXPRESS 프레임워크**


### App.js
```js
const express = require("express");

const app = express();

const port = 8080;

app.listen(port, () => {
  console.log("test");
});

app.get("/", (request, response) => {
  response.send("hello express");
});
```

* require('프레임워크') 명으로 모듈을 연결 시켜줌
* port 명과, 익스프레스 객체를 app 으로 지정,
*  .listen 을 통해 port 와 서버를 이어준다 ( .listen 메소드 : 서버와 포트를 이어줌)
*  .listen 의 첫번째 파라미터 : 포트
*  .listen 의 두번째 파라미터 : 콜백함수 :성공적으로 연결시 작동하는

 .get

### 템플릿 엔진
* 템플릿 엔진 : 문법과 설정에 따라 html 형식으로 변환시키는 모듈
* ejs : embedded javascript 의 약자로 , js가 내장되어있는 html 파일 .ejs 확장자
* npm install ejs 설치

### 폴더 구조
* static / statics : 프론트단을 구성하는 파일 ( .js파일과 .css파일, 이미지,동영상 파일들 )
* view / views : ejs 확장자 파일들이 들어감 ( 화면 구성하는 파일들 )



### 서버에 필수 요소 다운받기
* apt-get install nodejs : 노드 js 설치
* apt install nodejs-legacy : 노드 수동 설치
* apt-get install npm : npm 설치
* curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
* export NVM_DIR="$HOME/.nvm"
* [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
* [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
* nvm ls-remote : 버전
* nvm i 16.19.1
