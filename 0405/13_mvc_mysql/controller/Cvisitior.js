const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  // 인덱스화면 출력
  res.render("index");
};

//get /visitor = localhost:Port/visitor

exports.getVisitors = (req, res) => {
  console.log(Visitor.getVisitors());
  res.render("visitor", { data:Visitor.getVisitors() });
};
