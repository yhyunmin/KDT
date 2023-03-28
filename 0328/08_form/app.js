const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(`${__dirname}/views`)); // ejs 를 담을 views 폴더 경로 설정
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱 (분석)
app.use(express.json()); // json 형태로 데이터를 주고받음
// req.body parser를 사용할 수 있음.

/**
 * 라우팅(routing) : 경로 설정
 * 브라우저에서 어떤 url 로 접속 했을 때 어떤 페이지를 보여줄 것인가 ( 라우터의  뜻 )
 * 루트경로
 * localhost:PORT/ 로 접속 했을 때, index.ejs 를 보여주겠다.
 */

app.get("/", (req, res) => {
  const myTitle = "폼 실습을 합시다 ~! ";
  res.render("index", { title: myTitle, name: "Smurf!!!" });
});
app.listen(PORT, () => {
  console.log("서버가열렸서요");
  console.log(`http://localhost:${PORT}`);
});

app.get("/getForm", (req, res) => {
  // get 에서 query
  console.log(req.query);
  res.send("get 요청 성공");
  //   http://localhost:8000/getForm?id=&id=
});
app.post("/postForm", (req, res) => {
  // post 에선 body
  console.log(req.body);
  res.send("post 요청 성공");
  // http://localhost:8000/postForm
});
