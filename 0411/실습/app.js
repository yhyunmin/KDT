const express = require("express");
const session = require("express-session"); // 세션 설정
const dotenv = require("dotenv"); // 키값 암호화
// const multer = require("multer");
// const path = require("path");
const app = express();
const PORT = 8003;

dotenv.config(); // 사욥법 이거적으면 끝

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use("/uploads", express.static(`${__dirname}/uploads`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET_KEY, // 필수 옵션 ( 세션 암호화 할 때 쓰이는 키)
    resave: false,
    saveUninitialized: false, // 일반적으로 false 지종
  })
);
// [ 세션 설정 ]

const indexRouter = require("./routes");

app.use("/", indexRouter);

app.get("*", (req, res) => {
  // res.send('404 Error! 잘못된 주소 형식입니다.');
  res.render("404");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
