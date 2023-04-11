const express = require("express");
const app = express();
const PORT = 8000;

// cookie-parser 모듈 불러오기
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 요청의 쿠키를 해석해서 req.cookies 객체로 마듬
// ex name=hello 라는 쿠키를 보내면 , req.cookie = > {name:cookie}
const cookieParser = require("cookie-parser");
// cookieParser(secretKey,optionObj);
// -secretKey : 비밀키
// - optionObj : 쿠키에서 사용할 옵션 값
app.use(cookieParser()); // req.cookies 사용 가능

// res.cookie(key,value,options)
// : 쿠키 "설정"
// res.clearCookie(key,value,options)
// : 쿠키 "삭제"

const cookieConfig = {
  httpOnly: true, // 웹 서버를 통해서만 쿠키 접근 가능
  maxAge: 60 * 1000, // 쿠키 수명 ms단위
  // expires: 만로 날짜 설정
  // secure : https 에서만 쿠키 접근
  // signed : 쿠키 암호화
};
app.get("/", (req, res) => {
  res.render("index");
});
// 1. 쿠키 설정
app.get("/setCookie", (req, res) => {
  res.cookie("my first cookie", "cookie value test", cookieConfig);
  res.send("쿠키 설정 완료");
});
// 2. 쿠키 확인
app.get("/getCookie", (req, res) => {
  //req.cookies
  // cookie-parse 모듈이 만든 요청의 쿠키를 읽어옴
  res.send(req.cookies);
});
app.get("/clearCookie", (req, res) => {
  // 쿠키 삭제
  // clearCookie 할 때 res.cookie() 설정했던 key&value&option 이 일치 해야함
  // (단 option 에서 시간관련 옵션은 일치 하지 않아도 됨.)
  res.clearCookie("my first cookie", "cookie value test", cookieConfig);
  res.send("쿠키 삭제 완료");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
