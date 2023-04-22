[실습5]DM 기능 구현

만약에 DM 메시지라면; 그 특정 socket.id 에게만 메시지 전달
{nick,dm,msg}
만약에 dm 메세지가 아니면 전체 전달
{nick,msg}

server.js :
if(obj.dm !== 'all') {  
// dm 전송  
let dmSocketId = obj.dm; // 각 닉네임에 해당하는 socket.id  
const sendData = { nick:obj.myNick,dm :'(속닥속닥)',msg:obj.msg};  
// 1. dm을 보내고자 하는 그 socket.id한테 메세지 전송  
io.to)(dmSocketId).emit('newMessage',sendData);  
// 2. dm을 보내고 있는 자기자신 메세지 전송  
socket.emit('newMessage',sendData)  
 } else {  
//all 전송 (전체 공지)  
const sendData = { nick:obj.myNick, msg:obj.msg};  
io.emit('newMessage',sendData);  

// 클라이언트  
//dm이 아닌 데이터 : {nick:'aa'.msg'xxx}
//dm인 data : { nick:'aa',dm:'(속닥속닥)',msg:'xxx}

// 생성해야할 채팅구조
```html
<div class='my-chat'>
    <div>user1:msg1</div>
</div>
<div class='other-chat'>
    <div>user2:msg2</div>
</div>
```
```js
if(data.dm){
    div.classList.add('secret-chat');
    divChat.textContent = data.dm; // divChat 요소에 (속닥속닥) 글자를 추가
}

divChat.textContent =divChat.textContent + `${data.nick} : ${data.msg}`; // [실습5]
// dm; divCaht.textContent = '(속닥속닥)' + 누가 : 메시지
// not dm; divChat.textContent = '' + 누가 : 메시지

```
