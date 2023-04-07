const Model = require("../model/Model");

// 메인화면
exports.getIndex = (req, res) => {
  res.render("index", {
    pageTitle: "사이트 이름",
  });
};

// get 로그인 화면
exports.getLogin = (req, res) => {
  res.render("login", {
    pageTitle: "로그인 페이지 이름",
  });
};
exports.postCheckLogin = (req, res) => {
  console.log("req.body :", req.body);
  Model.postCheckLogin(req.body, (rows) => {
    // console.log("rows", rows);
    // console.log("id check?", req.body.userId, rows.userid);
    // console.log("pw check?", req.body.userPw, rows.pw);
    console.log("***", rows);

    // 데이터 베이스에서 빈값일때 에러뜸
    if (!rows) {
      return res.send({
        hasInfo: false,
      });
    } else if (req.body.userId === rows.userid || req.body.userPw === rows.pw) {
      res.send({
        hasInfo: true,
      });
    }
  });
  // 내 정보가서 사용할 수 잇나 ?
  return req.body;
};
// post 내정보 화면
exports.postMyProfile = (req, res) => {
  console.log("req.body", req.body); // id pw 저장되어있음
  Model.postMyProfile(req.body, (rows) => {
    console.log("rows cmain", rows);
    console.log("rows.name", rows.name);
    res.render("my_profile", {
      pageTitle: "내 정보",
      userName: rows.name,
      userId: rows.userid,
      userPw: rows.pw,
      id: rows.id,
    });
  });
};
// patch 내정보 수정
exports.patchUserInfo = (req, res) => {
  console.log(" req.body", req.body);
  Model.patchUserInfo(req.body, (rows) => {
    console.log("rows Cmain 111", rows.name);
    console.log("rows Cmain 222", req.body.name);
    res.send({
      hasSuccess: true,
      newName: req.body.name,
    });
  });
};
// get 회원가입 사이트
exports.getRegister = (req, res) => {
  res.render("register", {
    pageTitle: "회원가입 페이지 이름",
  });
};
// post 회원가입 결과
exports.getResult = (req, res) => {
  console.log("Cmain.js gerResult:", req.body);
  Model.getResult(req.body);
  res.render("result");
};
// post 아이디 유효성 확인
exports.postCheckUserId = (req, res) => {
  console.log("requested req.body : ", req.body);
  console.log("requested req.body.id : ", req.body.id);
  // const realData = Model.dummy();
  Model.postCheckUserId(req.body, (rows) => {
    console.log("Cmain.js userInfo rows : ", rows);
    // indexOf는 배열에서 값찾는거 // findIndex : 객체에서 값찾는거 .findIndex(item => item.userid === '1');
    // 유저 아이디 배열화
    const idx = rows.map((row) => row.userid);
    console.log("idx.userid", idx);
    // 유저 아이디 중에서 요청한 아이디(회원가입한 아이디) 찾기
    const idx2 = idx.indexOf(req.body.id);
    console.log("idx2", idx2);
    if (idx2 >= 0) {
      // 아이디 있음
      res.send({
        hasId: true,
        errorText: "사용할 수 없는 아이디입니다.",
      });
    } else if (idx2 < 0) {
      // 아이디 없음
      res.send({
        hasId: false,
        errorText: "사용할 수 있는 아이디입니다.",
      });
    }
  });

  // res.send(req.body.);
};

exports.deleteUserInfo = (req, res) => {
  Model.deleteUserInfo(req.body, (rows) => {
    console.log(rows);
    res.send("성공!");
  });
};
