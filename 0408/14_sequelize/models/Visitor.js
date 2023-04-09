// todo :visitor 모델 ( ->테이블 구조 ) 정의
// sequelize 모델과 mysql 연결(대응)

// function name1() {}
// const name3 = function () {};
// name3();
// const name2 = () => {};

const Visitor = function (Sequelize, DataTypes) {
  console.log("*****", DataTypes.INTEGER);
  console.log("*****", DataTypes.STRING(10));
  // Sequelize : models/index.js 에서 sequelize
  // DataTypes :models/index.js 에서 Sequelize
  //sequelize.define(param1,param2,param3)
  return Sequelize.define(
    "visitor", // param1 : 테이블 이름 설정
    {
      id: {
        // id INT NOT NULL PRIMARY KEY auto_increment,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name VARCHAR(20) NOT NULL,
        type: DataTypes.STRING(10),
        allowNUll: false,
      },
      comment: {
        // comment MEDIUMTEXT
        type: DataTypes.TEXT("medium"),
      }, // param2 : 컬럼 정의
    },
    {
      tableName: "visitor", // 실제 테이블 명
      freezeTableName: true, // 테이블명 고정 !
      timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
    } // param3 : 모델 옵션 정의
  );
  // return model;
};

module.exports = Visitor;
