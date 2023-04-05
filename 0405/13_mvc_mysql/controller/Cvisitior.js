const Visitor = require("../model/Visitor");

//(1) GET / =>
exports.main = (req, res) => {
  // 인덱스화면 출력
  res.render("index");
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
    console.log("Cvisitor.js >>", result);
    res.render("visitor", { data:result });
    ;
  });
};
