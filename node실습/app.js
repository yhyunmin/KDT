const express = require("express");
// multer 미들웨어 사용하기
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(`${ __dirname }/views`)); // ejs 를 담을 views 폴더 경로 설정
// app.use("/includes", express.static(`${__dirname}/views/includes`));
app.use("/uploads", express.static(`${ __dirname }/uploads`));
app.use(express.urlencoded({ extended:true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱 (분석)
app.use(express.json()); // json 형태로 데이터를 주고받음

// 메인화면
app.get("/", (req, res) => {
  res.render("index", {
    title:"NODE 실습"
  });
});

app.get("/get", (req, res) => {
  res.render("get", {
    title:"GET 요청 폼 결과 확인하기",
    pageName:"실습1.get으로 정보받기"
  });
});
app.get("/login", (req, res) => {
  res.render("login", {
    title:"Axios 로그인 ",
    pageName:"실습2.Axios Post 로그인"
  });
});
app.get("/post", (req, res) => {
  res.render("post", {
    title:"POST 요청 폼 결과 확인하기",
    pageName:"실습2.Post으로 정보받기"
  });
});

app.get("/getResult", (req, res) => {
  res.render("result", {
    // post: false,
    title:"result page",
    pageName:"실습1 폼 전송 완료!",
    // id: req.query.id,
    // gender: req.query.gender,
    // birthYear: req.query.birthYear,
    // birthMonth: req.query.birthMonth,
    // birthDay: req.query.birthDay,
    // hobby: req.query.hobby,
    userInfo:req.query
  });
});
app.post("/postResult", (req, res) => {
  res.render("result", {
    // post: true,
    title:"result page",
    pageName:"실습2 폼 전송 완료!",
    // id: req.body.id,
    // gender: req.body.gender,
    // birthYear: req.body.birthYear,
    // birthMonth: req.body.birthMonth,
    // birthDay: req.body.birthDay,
    // hobby: req.body.hobby,
    // color: req.body.color,
    // number: req.body.number,
    userInfo:req.body
  });
});

// 새로운 페이지 get.post 메서드 생성하기
// ejs 화면 띄우기 : render,{객체로 데이터 보내기}
// 데이터만 보내기 : send // 동적페이지 작성 가능

// axios 이용하여 데이터 받기
app.post("/axios", (req, res) => {
  console.log(req.body);
  console.log(req.body.data); // id 값
  // const userID = req.body.data;
  // const userID = req.body.pw;
  console.log(req.body.pw); // pw 값
  const id = "banana";
  const pw = "4321";
  req.body.id === id && req.body.pw === pw
    ? res.send({ answer:`${ req.body.id }님 로그인 하였습니다.` })
    : res.send({ answer:`로그인에 실패 하였습니다.` });
});
app.get("/axios", (req, res) => {
  res.send(req.query);
});

//0401
// 파일 저장 세부 설정하기.

app.get("/fileUpload", (req, res) => {
  res.render("fileUpload", {
    title:"file-upload",
    pageName:"실습 1 파일 업로드"
  });
});

const uploadDetail = multer({
  storage:multer.diskStorage({
    destination (req, file, done) {
      //destination:경로설정
      // done :callback 함수
      done(null, "uploads/");
    },
    filename (req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(req.body.id, ext) + ext);
      //  [파일명 +현재시간.확장자] 형식으로 업로드
    }
  }),
  limits:{ fileSize:5 * 1024 * 1024 }
});
app.post("/uploads", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  res.render("uploads", {
    title:"upload result",
    pageName:"파일 업로드 완료",
    userInfo:req.body,
    userImg:req.file ? req.file : 0,
  });
});

// ===================================
app.listen(PORT, () => {
  console.log("서버가열렸서요");
  console.log(`http://localhost:${ PORT }`);
});
