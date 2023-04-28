//[before]
// const Visitor = require("../model/Visitor");
//[after]
// models 변수 값 = models/server 에서 export 한 db 객체
const models = require("../models/");
console.log("models", models);

//(1) GET / =>
exports.main = (req, res) => {
  // 인덱스화면 출력
  res.render("index");
};

//get /visitor = localhost:Port/visitor

// (2) Get /visitor => localhost:PORT / visitors
exports.getVisitors = async (req, res) => {
  //
  // [before] 이전 코드
  // Visitor.getVisitors((result) => {
  // => SELECT * FROM visitor;
  //   res.render("visitor", { data: result });
  // });
  //
  //
  // //[after] sequelize // then
  // models.Visitor.findAll().then((result) => {
  //   console.log("findAll", result);
  //   res.render("visitor", { data: result });
  // });
  //[after] sequelize // async/await 사용
  const result = await models.Visitor.findAll();
  console.log("findAll", result);
  res.render("visitor", { data: result });
};

// (3) POST /visitor/write
exports.postVisitor = async (req, res) => {
  // [before]
  // Visitor.postVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js>>", result); // model 코드에서 데이터를 추가한 결과 rows.insertId
  //   // res.send('추가 성공!');
  //   res.send({
  //     id: result,
  //     name: req.body.name,
  //     comment: req.body.comment,
  //   });
  // });
  //[after] using sequelize
  const result = await models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  });
  console.log("**** postVisitor result", result);
  res.send(result);
};

exports.deleteVisitor = async (req, res) => {
  console.log("****************** deleteVisitor ", req.body);
  // [before]
  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   console.log("Cvisitor.js>>", result);
  //   res.send("삭제 성공");
  // });
  //=> delete from visitor where id=${id}
  //
  // [after]
  //
  const result = await models.Visitor.destroy({
    where: { id: req.body.id },
  });
  console.log("* deleteVisitor result : ", result); // 1
  res.end(); // 데이터 받읊필요없으니 끝 신호를 보내는 것
};

exports.getVisitor = async (req, res) => {
  // [ before ]
  // console.log("**", req.query); // { id :n }
  // Visitor.getVisitor(req.query.id, (rows) => {
  //   console.log(rows); // model callback 에서 넘겨주는 rows[0]
  //   res.send(rows);
  // });
  //
  // [after] sequelize async/await
  const result = await models.Visitor.findOne({
    where: { id: req.query.id },
  });
  console.log("** getVisitor findOne >> ", result);
  res.send(result);
};
exports.patchVisitor = async (req, res) => {
  // console.log(req.body);
  // [before]
  // Visitor.patchVisitor(req.body, () => {
  //   res.send("수정 성공!");
  // });
  //=> update visitor set name=${data.name},comment=${data.comment} where id = ${data.id}
  //
  // [after] sequelize / async await

  const result = await models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  console.log("***patchVisitor Update() result : ", result);
  res.end();
};
