const express = require('express');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs'); // view engine 등록
app.use('/views', express.static(`${__dirname}/views`)); // ejs 를 담을 views 폴더 경로 설정
// app.use("/includes", express.static(`${__dirname}/views/includes`));
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱 (분석)
app.use(express.json()); // json 형태로 데이터를 주고받음

app.get('/', (req, res) => {
  res.render('index', {
    title: '0329 실습',
  });
});

app.get('/get', (req, res) => {
  res.render('get', {
    title: 'GET 요청 폼 결과 확인하기',
    pageName: '실습1.get으로 정보받기',
  });
});
app.get('/post', (req, res) => {
  res.render('post', {
    title: 'POST 요청 폼 결과 확인하기',
    pageName: '실습2.Post으로 정보받기',
  });
});
app.get('/getResult', (req, res) => {
  res.render('result', {
    // post: false,
    title: 'result page',
    pageName: '실습1 폼 전송 완료!',
    // id: req.query.id,
    // gender: req.query.gender,
    // birthYear: req.query.birthYear,
    // birthMonth: req.query.birthMonth,
    // birthDay: req.query.birthDay,
    // hobby: req.query.hobby,

    userInfo: req.query,
  });
  res.send(req.query);
});
app.post('/postResult', (req, res) => {
  res.render('result', {
    // post: true,
    title: 'result page',
    pageName: '실습2 폼 전송 완료!',
    // id: req.body.id,
    // gender: req.body.gender,
    // birthYear: req.body.birthYear,
    // birthMonth: req.body.birthMonth,
    // birthDay: req.body.birthDay,
    // hobby: req.body.hobby,
    // color: req.body.color,
    // number: req.body.number,
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log('서버가열렸서요');
  console.log(`http://localhost:${PORT}`);
});
