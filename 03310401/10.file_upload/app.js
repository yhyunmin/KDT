const express = require("express");
// multer 미들웨어 사용하기
const multer = require("multer");
const path = require("path"); // 패스 불러오기 ( 내장 모듈 ) =>
// const upload = multer({
//   dest:"uploads/" // dest : 파일을 업로드하고 그 파일이 저장될 경로를 지정하는 속성
// });
//
const today = new Date();
let dateFormat = today.getFullYear() +
  ((today.getMonth() + 1) < 9 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1)) +
  ((today.getDate()) < 9 ? "0" + (today.getDate()) : (today.getDate()));

// 파일 저장 세부 설정하기.
const uploadDetail = multer({
  storage:multer.diskStorage({
    destination (req, file, done) {
      //destination:경로설정
      // done :callback 함수
      done(null, "uploads/");
    },
    filename (req, file, done) {
//가정 apple.png 파일을 업로드
      const ext = path.extname(file.originalname); // file.originalname 에서 "확장자 추출" =>png
      // path.basename(file.originalname,ext) => apple ( 확장자 제거한 파일이름만 )
      // Date.now() => 현재시간
      done(null, path.basename(file.originalname, ext) + "." + dateFormat + ext);
      //  [파일명 +현재시간.확장자] 형식으로 업로드
    }
  }),
  limits:{ fileSize:5 * 1024 * 1024 } // 5MB
  // 5 * 2^10 = 5KB
  // 5 * 2^10 * 2^10 = 5MB
});
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(`${ __dirname }/views`));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use("/uploads", express.static(`${ __dirname }/uploads`));
app.get("/", (req, res) => {
  res.render("index2");
});

// single() : 하나의 파일 업로드 할 때
// single()의 매개변수 : input의 name과 일치시키기
app.post("/uploads", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file); //업로드한  파일 정보
  // {
  //   fieldname: 'userfile', // 폼에 정의한  name
  //   originalname: 'SCR-20230318-paes.png', // 사용자가 업로드한 파일명
  //   encoding: '7bit', //파일 인코딩 타입
  //   mimetype: 'image/png', // 파일 mime 타입
  //   destination: 'uploads/', // 파일 저장할 경로
  //   filename: '3489d039a17efbb6f91b4885e1dd464d', // destination의 저장된 파일 명
  //   path: 'uploads/3489d039a17efbb6f91b4885e1dd464d', // 폴더이름부터시작한 전체 경로
  //   size: 97396 // 파일용량 (byte)
  // }

  console.log(req.body); //폼에 입력한 정보
  res.send("uploaded");
});
// array() : 여러 파일을 한 번에 업로드 할 때 사용
app.post("/uploads/array", uploadDetail.array("userfile"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send("multiple files uploaded");
});
// app.get("/getForm", (req, res) => {
// res.send("get 요청 성공");
//   http://localhost:8000/getForm?id=&id=
// });
app.post(
  "/uploads/fields",
  uploadDetail.fields([{ name:"userfile1" }, { name:"userfile2" }]),
  (req, res) => {
    // console.log(req.files);
    // console.log(req.body);
    res.send("each file uploaded");
  });
app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    // console.log(req.file);
    res.send(req.file);
  }
);
app.listen(PORT, () => {
  console.log("서버가열렸서요");
  console.log(`http://localhost:${ PORT }`);
});
