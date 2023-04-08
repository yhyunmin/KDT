const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 도메인뒤에 모든 경로를 indexRouter 로 보낸다.
// app.get("*", (req, res) => {
//   res.render("404");
// });
// app.use("/", userRouter);
const indexRouter = require('./routes');
app.use('/', indexRouter);
app.get('*', (req, res) => {
  // res.send('404 Error! 잘못된 주소 형식입니다.');
  res.render('404');
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
