// / js object에 key, value 추가하는 방법
const nickObj = {};

const socket = { id: "asdfasdf123412343541" };

nickObj.hello = "안녕"; // 방법1
nickObj["apple"] = "사과"; // 방법2
nickObj[socket.id] = "sean";

console.log(nickObj);

let nick = "사과";

nick in nickObj; // ?

nickObj.hasOwnProperty(nick); // ?

const obj = { hello: "안녕", apple: "사과" };

// apple 객체 삭제
delete obj.apple;
console.log(obj); // ?

// 실습4 채팅창 메세지 전송 step1
// send 이벤트 전송 { 닉네임 ,입력메세지 }
function send() {
  const data = {
    myNick: myNick,
    msg: document.querySelector("#message").value,
  };
  socket.emit("send", data);

  document.querySelector("#message").value = "";
}
