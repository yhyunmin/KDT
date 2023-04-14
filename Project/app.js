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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
// static 폴더 연결
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

const indexRouter = require("./routes/index");

app.use("/", indexRouter);
const nickObj = {};
function updateNickList() {
  io.emit("updateNicks", nickObj);
  // 서버에 접속한 클라이언트들에게 nickObj 에 변경이 일어났음을 알리는 이벤트
}
// 채팅방 입장
io.on("connection", (socket) => {
  console.log("a user connected socket.id =>", socket.id);
  // 닉네임 검사
  socket.on("setNick", (nick) => {
    if (Object.values(nickObj).indexOf(nick) > -1) {
      socket.emit("error", "이미 존재하는 닉네임입니다.");
    } else {
      //아이디 통과
      nickObj[socket.id] = nick;
      io.emit("notice", `${nick}님이 입장하셨습니다.`);
      socket.emit("entry", nick);
      updateNickList();
    }
  });
  socket.on("disconnect", () => {
    console.log(nickObj);
    console.log(socket.id);
    console.log(nickObj[socket]);
    io.emit("notice", `${nickObj[socket.id]}님이 퇴장하셨습니다.`);
    delete nickObj[socket.id];
    updateNickList();
  });

  // 반응 주고 받기
  socket.on("quake", (data) => {
    console.log(data);
    const obj = {
      first: data.reactID[0],
      second: data.reactID[1],
      id: data.id,
    };
    io.emit("react", obj);
  });
  socket.on("react-tada", (reactID, target) => {
    console.log(reactID, target);
    io.emit("react", reactID, target);
  });
});
const userNames = {};
// 채팅방 대화 송수신
//

http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
