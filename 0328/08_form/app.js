const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", `${express.static(__dirname)}/views`); // ejs 를 담을 views 폴더 경로 설정

/**
 * 라우팅(routing) : 경로 설정
 * 브라우저에서 어떤 url 로 접속 했을 때 어떤 페이지를 보여줄 것인가 ( 라우터의  뜻 )
 * 루트경로
 * localhost:PORT/ 로 접속 했을 때, index.ejs 를 보여주겠다.
 */

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(PORT, () => {
  console.log("서버가열렸서요");
  console.log(`http://localhost:${PORT}`);
});
