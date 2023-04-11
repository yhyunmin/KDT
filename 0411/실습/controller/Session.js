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
exports.deleteSession = async (req, res) => {
  await req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/");
    // res.end();
  });
};
exports.test = (req, res) => {
  res.send({
    id: req.sessionID,
    name: req.session.name,
  });
};
