const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
//dotenv : 환경변수를 파일에 저장해놓고 접근 할 수 있게 돕는 모듈
const app = express();
const PORT = 8000;

dotenv.config(); // 사욥법 이거적으면 끝
// process.env.XXX 환경변수 파일에 저장해놓은 값을 사용 할 수 있다.
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session({세션 모듈_옵션})
// - secret : 세션을 발급할 때 사용되는 키 ( 임의로 변조 하는것을 방지)
// - resave : 세션에 수정사항이 생기지 않더라도 매 요청(request)마다 다시 저장 할건지 여부
// - saveUninitialized : 세션에 저장할 내역에 없더라도 처음부터 세션 생성할지 여부
// - secure : https 프로토콜에서만 세션을 주고 받을 건지 유무
// dotenv : 중요한 정보는 깃허브에 올릴시 유출 될 수 있기에 환경변수를 이용한다.
app.use(
  session({
    secret: process.env.SECRET_KEY, // 필수 옵션 ( 세션 암호화 할 때 쓰이는 키)
    resave: false,
    saveUninitialized: false, // 일반적으로 false 지종
  })
);
app.get("/", (req, res) => {
  res.render("session");
});

app.get("/set", (req, res) => {
  // 세션 설정
  req.session.name = "홍길동";
  // 응답
  res.send("세션 설정 완료!");
});

app.get("/name", (req, res) => {
  // 세션 (읽기 전용)
  //req.session.키
  //req.sessionID: 현재 세션의 ID ( 서버가 클랑이ㅓㄴ트를 구별하기 위해 부여하는 고유 값)
  // -> 브라우저 단위로 다른값을 가짐
  res.send({
    id: req.sessionID,
    name: req.session.name,
  });
});

app.get("/destroy", (req, res) => {
  // req.session.destroy(세션삭제시 호출할 콜백 함수)
  // -> 세션 완전히 삭제되고, 웹 사이트 접속 할 때 마다 새로운 session ID 할당
  req.session.destroy((err) => {
    if (err) throw err;
    res.send("세션 삭제 완료");
  });
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
