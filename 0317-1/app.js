const express = require('express');

const app = express();

const port = 8080;
app.listen(port, () => {
  console.log(' 서버 연결 성공');
});
// .listen : 포트와 서버를 연결시켜주고 , 콜백함수로 서버 연결시 작동하는 함수
app.set('view engine', 'ejs');
app.set('/views', 'views');
app.use('/static', express.static(`${__dirname}/static`));

app.get('/', (req, res) => {
  res.render('main.ejs');
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});
app.get('/register', (req, res) => {
  res.render('register.ejs');
});
