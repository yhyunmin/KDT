const express = require("express");
// const session = require("express-session");
// const dotenv = require("dotenv");
//dotenv : 환경변수를 파일에 저장해놓고 접근 할 수 있게 돕는 모듈
const app = express();
// socket.io를 이용하기위한 작업
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 8000;

// dotenv.config(); // 사욥법 이거적으면 끝
// process.env.XXX 환경변수 파일에 저장해놓은 값을 사용 할 수 있다.
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// session({세션 모듈_옵션})
// - secret : 세션을 발급할 때 사용되는 키 ( 임의로 변조 하는것을 방지)
// - resave : 세션에 수정사항이 생기지 않더라도 매 요청(request)마다 다시 저장 할건지 여부
// - saveUninitialized : 세션에 저장할 내역에 없더라도 처음부터 세션 생성할지 여부
// - secure : https 프로토콜에서만 세션을 주고 받을 건지 유무
// dotenv : 중요한 정보는 깃허브에 올릴시 유출 될 수 있기에 환경변수를 이용한다.
// app.use(
//   session({
//     secret: process.env.SECRET_KEY, // 필수 옵션 ( 세션 암호화 할 때 쓰이는 키)
//     resave: false,
//     saveUninitialized: false, // 일반적으로 false 지종
//   })
// );
app.get("/", (req, res) => {
  console.log("connected");
  res.render("chat");
});

// io.on(event_name,callback)
// : socket 과 관련된 통신 작업 처리
// io.on(x, y); // x: 이벤트 이름, y: 콜백 함수

// 닉네임을 저장할 객체
// 배열은 순서가 있는 구조 :
// 객체는 순서가 없지만 키값이 있음 : 고유함
// => 닉네임이 겹치지 않도록 객체를 사용함.
// ex : {소켓_아이디:닉네임}
const nickObj = {};
// "connection" event

// [실습3-2]
// 닉네임 리스트 객체 업데이트
// 유저가 들어오거나 퇴장할 때 내역 업데이트
function updateNickList() {
  io.emit("updateNicks", nickObj);
  // 서버에 접속한 클라이언트들에게 nickObj에 변경이 일어났음을 알리는 이벤트
}

io.on("connection", (socket) => {
  // 접속이 되었을때 할 기능 작성
  // "connection" event
  // 클라이언트가 접속했을 때 발생하는 이벤트
  // 콜백으로 socket 객체를 제공
  console.log("server socket connected 🙆🏻‍", socket.id);
  // 최초 입장시(소켓)
  // socket.id : 소켓 고유 아이디 -> socket은 웹페이지 별로 id 생성 !
  // socket.on(event,callback): '데이터 받음'
  // event에 대해서 정보를 받아 callback 을 실행.

  // [실습1]
  socket.on("hello", (data) => {
    console.log(`${data.who}:${data.msg}`);
    socket.emit("helloKr", {
      who: "인싸",
      msg: "안녕하세요",
    });
  });
  socket.on("bye", (data) => {
    console.log(`${data.who}:${data.msg}`);
    socket.emit("byeKr", {
      who: "빠이",
      msg: "안녕히 가세요",
    });
  });
  socket.on("study", (data) => {
    console.log(`${data.who}:${data.msg}`);
    socket.emit("studyKr", {
      who: "꽁부",
      msg: "스터디하세요",
    });
  });
  // [실습 3] 채팅창 입장 안내 문구
  io.emit("notice", `${socket.id.slice(0, 5)}님이 입장하셨습니다.`);
  // [실습3-2] 채팅창 입장 안내 문구 socket.id -> nickname
  socket.on("setNickname", (nickname) => {
    console.log("socket on setNick>>", nickname); // 프론트에서 입력한 닉네임 값

    // 닉네임 중복 여부
    // if(Object.values(nickobj).indexOf(nick)>-1)
    if (nickname in nickObj) {
      io.emit("error", `이미 존재하는 닉네임입니다. 다시 입력해주세요`);
    }
    // 닉네임 중복 안됨
    else {
      nickObj[socket.id] = nickname;
      io.emit("notice", `${nickname}님이 입장하셨습니다.`);
      socket.emit("entrySuccess", nickname);
    }
  });
});
// [실습3-3] 접속자 퇴장
// discount event : 클라이언트가 연결을 끊었을 때 발생 ( 브라우저 탭 닫음 )
socket.on("disconnect", () => {
  console.log("*** disconnected ", socket.id);

  // 미션 1 : 1. xx님 퇴장 하셨습니다 출력

  // 미션 2 : nickObj 에서 퇴장한 socket.id 삭제
  // 미션 3 : nickObj 리스트 업데이트
});
// 주의) socket 을 사용할 때는 http.listen 으로 PORT 를 열어야 함 !!
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
