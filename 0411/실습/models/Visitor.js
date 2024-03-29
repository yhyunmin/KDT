const Visitor = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "visitor",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
        allowNull: true,
      },
    },
    {
      tableName: "visitor", // 실제 테이블 명
      freezeTableName: true, // 테이블명 고정 !
      timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
    }
  );
};
module.exports = Visitor;
