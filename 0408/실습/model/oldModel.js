const mysql = require("mysql");

// exports.dummy = () => {
//   return {
//     realId: "test",
//     realPw: "test",
//   };
// };

//  mysql 관련
const conn = mysql.createConnection({
  host: "localhost", // database 가 설치된 IP 주소
  // port:3306,
  user: "user", // mysql user 계정의 아이디
  password: "1234", //데이터베이스 접속 비밀번호
  database: "user",
});

//로그인
exports.postCheckLogin = (data, cb) => {
  console.log("data", data);
  const sql = `
        Select *
        from user
        where userid = '${data.userId}'
          and pw = '${data.userPw}'
    `;
  conn.query(sql, (error, rows) => {
    if (error) throw error;
    console.log("postCheckLogin rows : ", rows);
    cb(rows[0]);
  });
  return data;
};

//회원가입 창 아이디 중복검사 가져오기
exports.postCheckUserId = (data, cb) => {
  console.log("oldModel.js getUserID:", data);
  // userid 데이터베이스에서 가져오기
  const sql = ` SELECT userid
                  FROM user;`;
  conn.query(sql, (error, rows) => {
    if (error) throw error;
    console.log("oldModel.js getUserID rows:", rows);
    // 콜백함수에 rows ( userid) 보내기
    cb(rows);
  });
};
exports.getResult = (data) => {
  console.log(data);
  console.log(data.userid);
  console.log(data.userPw);
  console.log(data.userName);
  console.log(data.userName);
  const sql = `
        insert into user (userid, name, pw)
        values ('${data.userId}', '${data.userName}', '${data.userPw}');
    `;
  conn.query(sql, (error, rows) => {
    if (error) throw error;
    console.log(rows);
  });
};

//로그인 후에 내정보창 뜨기
exports.postMyProfile = (data, cb) => {
  console.log("data", data);
  const sql = `
        select *
        from user
        where userid = '${data.id}';
    `;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("rows", rows);
    cb(rows[0]);
  });
};
//내정보 창 에서 수정 버튼
exports.patchUserInfo = (data, cb) => {
  console.log("data", data);
  const sql = `
      Update user
      set userId='${data.userId}',
          pw    ='${data.pw}',
          name='${data.name}'
      where id = '${data.id}'
  `;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("rows", rows);
    cb(rows);
  });
};

exports.deleteUserInfo = (data, cb) => {
  const sql = `
  delete from user where userid = '${data.id}'; 
  `;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("rows", rows);
    cb(rows);
  });
};
