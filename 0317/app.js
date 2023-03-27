const express = require("express");

const app = express();

const port = 8080;

app.listen(port, () => {
  console.log("서버 열렸서요");
});
// 지정된 포트와 서버를 연결해주는 메소드 .listen
// 첫번째 파라미터 : 포트,
// 두번째 파라미터 : 콜백 함수

app.get("/", (request, response) => {
  response.render("test.ejs");
  // response.send("<h1>안녕하세요</h1>");
});
// 기본 url "/"로 get 요청을 받으면 ,서버의 응답으로 hello world 를 반환.
// request : 클라이언트 ➡ 서버 "요청"
// response : 서버 ➡ 클라이언트 "응답"

app.set("view engine", "ejs"); // ejs 를 뷰엔진으로 설정
app.set("/views", "views"); // views 파일들을 /views 폴더에 넣을거라 설정

// 이미지 등록을 하기위해선 app.js 에서 설정해야함
app.use("/static", express.static(`${__dirname}/static`));

// .use ( static 파일 경로,
//       express.static 이하의 폴더 경로를 static 이라 명명 하겠다.

// 로그인 창 render
app.get("/login", (req, res) => {
  res.render("login"); // 알아서 views 폴더안에 login 을 찾아 경로를 잡아준다.
});

// get : "경로"를 들어갔을때 서버에서 작동할 콜백함수 (res)

// 회원가입 창 render
app.get("/login/register", (req, res) => {
  res.render("register"); // views 폴더안에 register를 잡아줌.
});
