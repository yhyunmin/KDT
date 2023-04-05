// exports.getVisitors = () => {
//   return [
//     {
//       id:1,
//       name:"홍길동",
//       comment:"내가왔다."
//     },
//     {
//       id:2,
//       name:"이찬혁",
//       comment:"으라차차"
//     }
//   ];
// };

// MySQL 연결 전 상태
// [after] mysql 연결;
const mysql = require("mysql");

// database 연결
const conn = mysql.createConnection({
  host:"localhost", // database 가 설치된 IP 주소
  // port:3306,
  user:"user", // mysql user 계정의 아이디
  password:"1234", //데이터베이스 접속 비밀번호
  database:"kdt"
});

exports.getVisitors = (cb) => {
  // conn.query(sql,callback);
  //  sql : sql 문 // calback : 할 일
  // => conn 에 저장되어 있는 데이터베이스 접근해서 sql문 실행 => 결과를 callback 함수에 넘겨줌
  // conn.query(); // .query() 메소드 존재
  const sql = "SELECT * FROM visitor;";

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("Visitor.js >>", rows);
    cb(rows);
  });
};
