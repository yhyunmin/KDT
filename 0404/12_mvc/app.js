const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(`/views`));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/getForm", (req, res) => {
// res.send("get 요청 성공");
//   http://localhost:8000/getForm?id=&id=
// });

app.listen(PORT, () => {
  console.log("서버가열렸서요");
  console.log(`http://localhost:`);
});
