const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use('/uploads', express.static(`${__dirname}/uploads`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      //destination:경로설정
      // done :callback 함수
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(req.body.id, ext) + ext);
      //  [파일명 +현재시간.확장자] 형식으로 업로드
    },
  }),
});
//
const indexRouter = require('./routes');
//require : 폴더까지만 접근할 경우엔, 자동으로 index.js 를 찾아감. i.e) index 는 생략 가능

// 미들웨어 등록은 app.use
app.use('/', indexRouter); // 도메인뒤에 모든 경로를 indexRouter 로 보낸다.
// '/~~ ' 모든 라우터를 /routes/index.js에 정의해 놨으니, /routes/index.js 이 파일을 읽어라

// [404 error]
// 맨 마지막 라우트로 선언: nor 나머지 코드 무시되기 때문!!
// * : 제일 마지막에 적어야하고 /  ** 없는 페이지에 접근 하려할 때 사용 **

// 404 처리 라우터는 app.js 마지막에 작성 해준다.
app.get('*', (req, res) => {
  // res.send('404 Error! 잘못된 주소 형식입니다.');
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
