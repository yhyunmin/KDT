const express = require("express");
// multer 미들웨어 사용하기
const multer = require("multer");
const path = require("path"); // 패스 불러오기 ( 내장 모듈 ) =>
const upload = multer({
  dest:"uploads/" // dest : 파일을 업로드하고 그 파일이 저장될 경로를 지정하는 속성
});
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(`${ __dirname }/views`));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use("/uploads", express.static(`${ __dirname }/uploads`));
app.get("/", (req, res) => {
  res.render("index");
});

// single() : 하나의 파일 업로드 할 때
// single()의 매개변수 : input의 name과 일치시키기
app.post("/uploads", upload.single("userfile"), (req, res) => {
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
// app.get("/getForm", (req, res) => {
// res.send("get 요청 성공");
//   http://localhost:8000/getForm?id=&id=
// });

app.listen(PORT, () => {
  console.log("서버가열렸서요");
  console.log(`http://localhost:${ PORT }`);
});
