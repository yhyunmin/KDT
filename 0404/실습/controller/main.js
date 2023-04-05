const model = require("../model/model");
const user = require("../model/User");

exports.main = (req, res) => {
  res.render("index");

};
exports.checkID = (req, res) => {
  return (model.correctID().id === req.body.id && model.correctID().pw === req.body.pw ? res.send({
    correct:true,
    answer:`${ model.correctID().id }님 로그인 하였습니다.`
  }) : res.send({
    correct:false,
    answer:`로그인에 실패 하였습니다.`
  }));
};

const array = []; // 유저 정보를 저장할 배열
const arrayIDs = []; // 유저 아이디만 저장할 배열
const userIds = [];
const users = user.users.split("\n");
const userInfos = users.map((user) => {
  const [id, pw, name] = user.split("//");
  return {
    id,
    pw,
    name
  }; // ?
});
for (let u of users) {
  console.log(users);
  array.push({
    realId:u.split("//")[0], // apple -> banana -> happy
    realPw:u.split("//")[1], // 1234 -> 4321 -> qwer1234
    name:u.split("//")[2] // 사과사과 -> 바나나나나 -> 해피해피
  });
  arrayIDs.push(u.split("//")[0]); // apple -> banana -> happy
}
console.log(array);
// [
//   { realId: 'apple', realPw: '1234', name: '사과사과' },
//   { realId: 'banana', realPw: '4321', name: '바나나나나' },
//   { realId: 'happy', realPw: 'qwer1234', name: '해피해피' }
// ]

// arr.indexOf(x): x가 arr 배열의 원소라면 해당 원소의 위치(인덱스값)을 반환
// 만약에 없다면 -1 반환

exports.userCheckID = (req, res) => {
  for (let user of userInfos) {
    userIds.push(user.id); //?
  }// ?
  const idx = userIds.indexOf(req.body.id);
  if (idx >= 0) {
    //아이디 있음
    console.log(userIds[idx]);
    if (userInfos[idx].pw === req.body.pw) {
      // 아이디 있고 , 비번 맞음
      res.send({
        isLogin:true,
        userInfo:userInfos[idx]
      });
    } else {
      res.send({ isSuccess:false });
    }
  } else {
    console.log("아이디 없음");
    res.send({ isSuccess:false });
  }

  // 코드 다시 작성해볼것
};
