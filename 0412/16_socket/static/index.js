// frontend js

let socket = io.connect();

socket.on("connect", () => {
  console.log("client socket connected 🙆🏻‍", socket.id);
});

function sayHello() {
  // client -> server 정보 보내기
  // socket.emit(event,data): 데이터 "전송"
  // => event 라는 이름으로 data를 전송/
  socket.emit("hello", {
    who: "client",
    msg: "hello",
  });
  socket.on("helloKr", (data) => {
    const formServer = document.getElementById("formServer");
    formServer.innerHTML = `${data.who}:${data.msg} <br>
`;
  });
}

function sayBye() {
  socket.emit("bye", {
    who: "client",
    msg: "bye",
  });
  socket.on("byeKr", (data) => {
    const formServer = document.getElementById("formServer");
    formServer.innerHTML = `${data.who}:${data.msg} <br>`;
  });
}

function sayStudy() {
  socket.emit("study", {
    who: "client",
    msg: "study",
  });
  socket.on("studyKr", (data) => {
    const formServer = document.getElementById("formServer");
    formServer.innerHTML = `${data.who}:${data.msg} <br>`;
  });
}
