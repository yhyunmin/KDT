const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
// req.body 를 사용하기위해서
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (임시) DB로부터 받아온 댓글 목록
// 댓글을 저장 ( mysql 이 배열형태로 저장되어 가져오게될것 )
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
];

// [Before] MVC 적용 전에는 app.js에서 라우트 정의
// 단점: 라우터(경로)가 많아진다면? app.js 코드가 길어짐 -> 유지보수성 하락

// GET / 기본 라우터
app.get();

// GET /comments
app.get();

// GET /comment/:id 쿼리(?id=6)
// req.query { id:6,name:"홍길동"} // req.query.id => 6
// GET /comment/:id/:name
// /comment/6/홍길동
// req.params { id: 6,name:"홍길동"} // req.params.id => 6
app.get();

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
