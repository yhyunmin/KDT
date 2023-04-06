const mysql = require('mysql');

//  mysql 관련
const conn = mysql.createConnection({
  host: 'localhost', // database 가 설치된 IP 주소
  // port:3306,
  user: 'user', // mysql user 계정의 아이디
  password: '1234', //데이터베이스 접속 비밀번호
  database: 'user',
});

exports.getLogin = () => {};

exports.getRegister = () => {};

exports.getMyProfile = () => {};

exports.deleteMyAccount = () => {};
