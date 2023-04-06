const Model = require('../model/Model');

// 메인화면
exports.getIndex = (req, res) => {
  res.render('index', {
    pageTitle: '사이트 이름',
  });
};

// get 로그인 화면
exports.getLogin = (req, res) => {
  res.render('login', {
    pageTitle: '로그인 페이지 이름',
  });
  Model.getLogin();
};

// get 회원가입 사이트
exports.getRegister = (req, res) => {
  res.render('register', {
    pageTitle: '회원가입 페이지 이름',
  });
  Model.getRegister();
};

// get 회원 정보 수정
exports.getMyProfile = (req, res) => {
  res.render('my_profile', {
    pageTitle: '내 정보',
  });
};
