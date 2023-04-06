const Visitor = require('../model/Visitor');

//(1) GET / =>
exports.main = (req, res) => {
  // 인덱스화면 출력
  res.render('index');
};

//get /visitor = localhost:Port/visitor

// (2) Get /visitor =>
exports.getVisitors = (req, res) => {
  //
  // [before] 이전 코드
  // console.log(Visitor.getVisitors());
  // res.render("visitor", { data:Visitor.getVisitors() });
  //
  //  [after] mysql db  연결 ;
  Visitor.getVisitors((result) => {
    console.log('Cvisitor.js >>', result);
    res.render('visitor', { data: result });
  });
};

// (3) POST /visitor/write
exports.postVisitor = (req, res) => {
  console.log(req.body);

  Visitor.postVisitor(req.body, (result) => {
    console.log('Cvisitor.js>>', result); // model 코드에서 데이터를 추가한 결과 rows.insertId
    // res.send('추가 성공!');
    res.send({
      id: result,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};
