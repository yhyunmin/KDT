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

exports.deleteVisitor = (req, res) => {
  console.log(req.body); //{id : n }
  console.log(req.body.id);
  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log('Cvisitor.js>>', result);
    res.send('삭제 성공');
  });
};

exports.getVisitor = (req, res) => {
  console.log('**', req.query); // { id :n }
  Visitor.getVisitor(req.query.id, (rows) => {
    console.log(rows); // model callback 에서 넘겨주는 rows[0]
    res.send(rows);
  });
};
exports.patchVisitor = (req, res) => {
  console.log(req.body);

  Visitor.patchVisitor(req.body, () => {
    res.send('수정 성공!');
  });
};
