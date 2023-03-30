const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(`${__dirname}/views`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// ajax get/post 요청
app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
// axios get/post 요청
app.get("/axios", (req, res) => {
  res.send(req.query);
});
app.post("/axios", (req, res) => {
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log("서버가열렸서요");
  console.log(`http://localhost:${PORT}`);
});
