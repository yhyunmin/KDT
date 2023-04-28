//  models/server
// sequelize-cli 자동 생성한 코드
const Sequelize = require("sequelize"); //
const config = require(__dirname + "/../config/config.json")["development"];
// config.json 파일에서 개발환경일 떄의 db설정 옵션을 가져옴
// const a =  require(`${__dirname}/../config/config.json`)[env];
// a 에는 다음 정보가 찍힘 ;
// {
//     {
//         "development": {
//         "username": "user",
//             "password": 1234,
//             "database": "kdt",
//             "host": "127.0.0.1",
//             "dialect": "mysql"
//     },
// const config = a['development'];
// }

// 내보낼 빈 객체 db : 얘가 다른파일에서 사용할 db
const db = {};

// 객체 서언시 매개변수로 db명
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// db = { sequelize: sequelize, Sequelize: Sequelize }
db.sequelize = sequelize;
db.Sequelize = Sequelize; // Sequelize 라이브러리
// db = { sequelize: sequelize, Sequelize: Sequelize, Visitor: "xx" }
db.Visitor = require("./Visitor")(sequelize, Sequelize);
module.exports = db;
