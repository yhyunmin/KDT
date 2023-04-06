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
const mysql = require('mysql');

// database 연결
const conn = mysql.createConnection({
  host: 'localhost', // database 가 설치된 IP 주소
  // port:3306,
  user: 'user', // mysql user 계정의 아이디
  password: '1234', //데이터베이스 접속 비밀번호
  database: 'kdt',
});

exports.getVisitors = (cb) => {
  // conn.query(sql,callback);
  //  sql : sql 문 // calback : 할 일
  // => conn 에 저장되어 있는 데이터베이스 접근해서 sql문 실행 => 결과를 callback 함수에 넘겨줌
  // conn.query(); // .query() 메소드 존재
  const sql = 'SELECT * FROM visitor;';

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('Visitor.js >>', rows);
    // => [{},{},{}]
    cb(rows);
  });
};

exports.postVisitor = (data, callback) => {
  console.log(data); // controller 에서 넘겨주고 있는 클라이언트에서 보내주는 폼 값 ( req.body )
  const sql = `insert into visitor(name, comment)
               values ('${data.name}', '${data.comment}')`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    // console.log('Visitor.js:', rows);
    console.log('Visitor.js:', rows.insertId);
    // callback(rows);
    // rows console.log 에서 필요한건 insertId 부분
    // rows 가 아닌 rows.insertId 를 받아온다.
    callback(rows.insertId);
  });
};

exports.deleteVisitor = (id, callback) => {
  console.log(id); // req.body 에서받은 req.body.id
  const sql = ` delete
                from visitor
                where id = ${id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('Visitor.js >>', rows);
    callback(true);
  });
};

exports.getVisitor = (id, callback) => {
  //    id : controller 에서 보내주는 아이디
  console.log('visitors.js', id);
  const sql = `select *
               from visitor
               where id = ${id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('Visitor.js >>', rows);
    callback(rows[0]);
  });
};

exports.patchVisitor = (data, callback) => {
  console.log(data);
  const sql = `
      update visitor
      set name='${data.name}',
          comment='${data.comment}',
          where id = ${data.id};
  `;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log('Visitor.js>>', rows);
    callback(rows);
  });
};
