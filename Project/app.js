const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require("http").Server(app);
const io = require("socket.io")(http); // socket.io
const path = require("path");
const db = require("./config/db");

const PORT = process.env.PORT || 7999;

const dotenv = require("dotenv");
dotenv.config();

// body-parser
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
// static 폴더 연결
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

const indexRouter = require("./routes/index");

app.use("/", indexRouter);

// 채팅방 입장
io.on("connection", (socket) => {
  console.log("a user connected socket.id =>", socket.id);
  // react test
  socket.on("react-quake", (reactID, target) => {
    console.log(reactID, target);
    io.emit("react", reactID, target);
  });
  socket.on("react-tada", (reactID, target) => {
        console.log(reactID, target);
        io.emit("react", reactID, target);
      }
  );
});
const userNames = {};
// 채팅방 대화 송수신
//

http.listen(PORT, () => {
  console.log(`http://localhost:${ PORT }`);
});
