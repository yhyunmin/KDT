// const Model = require("../models/");
// exports.postSession = (req, res) => {
//   req.session.name = "집에가고싶다";
//   res.send("postSession 세션 설정 완료");
// };
// exports.getSession = (req, res) => {
//   res.send({
//     id: req.sessionID, //session ID 체크
//     name: req.session.name, //session name 체크
//   });
// };
exports.deleteSession = (req, res) => {
  console.log("*** &&&", req.session);
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/");
    // res.end();
  });
  // res.send("!!");
};

exports.test = (req, res) => {
  res.send({
    id: req.sessionID,
    name: req.session.name,
  });
};
