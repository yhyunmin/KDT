const User = require("../model/User");
export const main = (req, res) => {
  res.render("index");

};

exports.practice2 = (req, res) => {
  const userData = User.getUserInfo(); // {realId , realPw }
  console.log(userData);

  // 로그인 성공 / 실패 로직
  // 아이디,비번 모두 일치 => 로그인 성공
  // 아이디,비번 중에서 하나라도 일치하지 않으면 => 실패
  if (userData.realId === req.body.userId &&
    userData.realPw === req.body.userPw) {
    res.send({
      isLogin:true,
      userInfo:userData
    });
  } else {
    res.send({ isLogin:false });
  }
};
