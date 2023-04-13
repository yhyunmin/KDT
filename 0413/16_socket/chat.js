const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  console.log("client connected");
  res.render("chat");
});

// 닉네임을 저장할 객체
// : 닉네임이 겹치지 않도록 객체({ })를 사용함
// { 소켓_아이디: 닉네임, ... }
const nickObj = {};
// [실습3-2]
// 닉네임 리스트 객체 업데이트
// 유저가 들어오거나 퇴장할 때 내역 업데이트
function updateNickList() {
  io.emit("updateNicks", nickObj);
  // 서버에 접속한 클라이언트들에게 nickObj 에 변경이 일어났음을 알리는 이벤트
}

// io.on(event_name, callback)
// : socket과 관련된 통신 작업 처리
io.on("connection", (socket) => {
  // "connection" event
  // - 클라이언트가 접속했을 때 발생하는 이벤트
  // - 콜백으로 socket 객체를 제공

  // 최초 입장시 (연결)
  // socket.id: 소켓 고유 아이디 -> socket 은 웹 페이지별로 id 생성!
  // => 크롬에서 탭 2개 띄우면 socket.id 는 각각 생김 (2개)
  console.log("⭕ Server Socket Connected >> ", socket.id);

  // [실습1]
  // socket.on('hello', (data) => {
  //   console.log(`${data.who} : ${data.msg}`);
  //   // server -> client 보낼 때
  //   socket.emit('helloKr', { who: 'hello', msg: '안녕~~~' });
  // });

  // [실습3] 채팅장 입장 안내 문구
  // io.emit('notice', `${socket.id.slice(0, 5)}님이 입장하셨습니다.`);

  // [실습3-2] 채팅창 입장 안내 문구 socket.id -> nickname
  socket.on("setNick", (nick) => {
    console.log("socket on setNick >> ", nick); // 프론트에서 입력한 닉네임 값
    // 닉네임 중복 여부
    if (Object.values(nickObj).indexOf(nick) > -1) {
      // 아이디 중복
      socket.emit("error", "이미 존재하는 닉네임입니다. 다시 입력해주세요!!");
    } else {
      // 아이디 통과
      nickObj[socket.id] = nick; // nickObj 객체에 "소켓_아이디: 닉네임" 추가
      io.emit("notice", `${nick}님이 입장하셨습니다.`); // 입장 메세지 "전체 공지"
      // 전체 공지 => 서버에 접속한 모든 클라이언트에게 이벤트 전송
      socket.emit("entrySuccess", nick); // 입장 성공시
      updateNickList();
    }
  });
  // [실습3-3] 접속자 퇴장
  // discount event : 클라이언트가 연결을 끊었을 때 발생 ( 브라우저 탭 닫음 )

  // 미션 1 : 1. xx님 퇴장 하셨습니다 출력

  // 미션 2 : nickObj 에서 퇴장한 socket.id 삭제
  // 미션 3 : nickObj 리스트 업데이트
  // 주의) socket 을 사용할 때는 http.listen으로 PORT 열어야 함!!!
  socket.on("disconnect", () => {
    console.log(nickObj);
    console.log(socket.id);
    console.log(nickObj[socket]);
    io.emit("notice", `${nickObj[socket.id]}님이 퇴장하셨습니다.`);
    delete nickObj[socket.id];
    updateNickList();
  });
  // [실습4] 채팅창 메시지 전송 Step1
  socket.on("send", (obj) => {
    console.log("socket on send", obj); // {myNick :'ㅁㅁ',msg:'안녕'}
    // [실습4] 채팅창 메시지 전송 Step2
    // 서버에 접속한 모든 클라이언트 한테 : 누가 뭐라고 말했는지 :  이벤트 보내기
    const sendData = {
      nick: obj.myNick,
      msg: obj.msg,
    };
    io.emit("newMessage", sendData);
  });
});

http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
