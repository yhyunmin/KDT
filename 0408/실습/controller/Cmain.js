const Model = require("../models/");

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
// 로그인 검사
exports.postCheckLogin = async (req, res) => {
  console.log("req.body :", req.body);
  // [before]
  //   Model.postCheckLogin(req.body, (rows) => {
  //     // console.log("rows", rows);
  //     // console.log("id check?", req.body.userId, rows.userid);
  //     // console.log("pw check?", req.body.userPw, rows.pw);
  //     console.log("***", rows);
  //
  //     // 데이터 베이스에서 빈값일때 에러뜸
  //     if (!rows) {
  //       return res.send({
  //         hasInfo: false,
  //       });
  //     } else if (req.body.userId === rows.userid || req.body.userPw === rows.pw) {
  //       res.send({
  //         hasInfo: true,
  //       });
  //     }
  //   });
  //after
  console.log("입력한 아이디/패스워드", req.body.userId, req.body.userPw);
  const response = await Model.Model.findOne({
    where: {
      // userid: "admin",
      // pw: "admin",
      userid: req.body.userId,
      pw: req.body.userPw,
    },
  });
  console.log(" *** findOne", response);
  if (!response) {
    return res.send({
      hasInfo: false,
    });
  } else if (
    req.body.userId === response.userid ||
    req.body.userPw === response.pw
  ) {
    res.send({
      hasInfo: true,
    });
  }
};
// post 내정보 화면
exports.postMyProfile = async (req, res) => {
  console.log("req.body", req.body); // id pw 저장되어있음
  //[before]
  // Model.postMyProfile(req.body, (rows) => {
  //   console.log("rows cmain", rows);
  //   console.log("rows.name", rows.name);
  //   res.render("my_profile", {
  //     pageTitle: "내 정보",
  //     userName: rows.name,
  //     userId: rows.userid,
  //     userPw: rows.pw,
  //     id: rows.id,
  //   });
  // });
  //
  //[after]
  console.log("로그인한 ID와 PW", req.body);
  const response = await Model.Model.findOne({
    where: {
      userid: req.body.id,
    },
  });
  console.log("(내정보화면)postMyProfile 함수의 *** findOne", response);
  res.render("my_profile", {
    pageTitle: "내 정보",
    userName: response.name,
    userId: response.userid,
    userPw: response.pw,
    id: response.id,
  });
};
//
// patch 내정보 수정
exports.patchUserInfo = async (req, res) => {
  console.log("내정보 수정 patchUserInfo req.body", req.body);
  //[before]
  // Model.patchUserInfo(req.body, (rows) => {
  //   console.log("rows Cmain 111", rows.name);
  //   console.log("rows Cmain 222", req.body.name);
  //   res.send({
  //     hasSuccess: true,
  //     newName: req.body.name,
  // id: req.body.id;
  //   });
  // });
  const response = await Model.Model.update(
    //     Update user set userId='${data.userId}', pw    ='${data.pw}', name='${data.name}' where id = '${data.id}'
    {
      userId: req.body.userId,
      pw: req.body.pw,
      name: req.body.name,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.send({
    hasSuccess: true,
    newName: req.body.name,
    id: req.body.id,
  });
};
// get 회원가입 사이트
exports.getRegister = (req, res) => {
  res.render("register", {
    pageTitle: "회원가입 페이지 이름",
  });
};
// post 회원가입 결과
exports.getResult = async (req, res) => {
  console.log("*^*^*^*^ Post 회원가입 결과 getResult:", req.body);
  const result = await Model.Model.create({
    userid: req.body.userId,
    pw: req.body.userPw,
    name: req.body.userName,
  });
  // [before]
  // Model.getResult(req.body);
  res.render("result");
};
// post 아이디 유효성 확인
exports.postCheckUserId = async (req, res) => {
  console.log("requested req.body : ", req.body);
  console.log("requested req.body.id : ", req.body.id);
  const result = await Model.Model.findOne({
    where: {
      userid: req.body.id,
    },
  });
  console.log(result);
  //아이디가 없으면 null 값이나오고  아이디가 있으면 정보가있으니까
  // console.log("result.id가 멀까요 postcheckuserID", result.id);
  if (!result) {
    res.send({
      hasId: false,
      errorText: "사용할 수 있는 아이디입니다.",
    });
  } else if (result.id) {
    res.send({
      hasId: true,
      errorText: "사용할 수 없는 아이디입니다.",
    });
  }

  // Model.postCheckUserId(req.body, (rows) => {
  //   console.log("Cmain.js userInfo rows : ", rows);
  //   // indexOf는 배열에서 값찾는거 // findIndex : 객체에서 값찾는거 .findIndex(item => item.userid === '1');
  //   // 유저 아이디 배열화
  //   const idx = rows.map((row) => row.userid);
  //   console.log("idx.userid", idx);
  //   // 유저 아이디 중에서 요청한 아이디(회원가입한 아이디) 찾기
  //   const idx2 = idx.indexOf(req.body.id);
  //   console.log("idx2", idx2);
  //   if (idx2 >= 0) {
  //     // 아이디 있음
  //     res.send({
  //       hasId: true,
  //       errorText: "사용할 수 없는 아이디입니다.",
  //     });
  //   } else if (idx2 < 0) {
  //     // 아이디 없음
  //     res.send({
  //       hasId: false,
  //       errorText: "사용할 수 있는 아이디입니다.",
  //     });
  //   }
  // });

  // res.send(req.body.);
};

// 계정해지
exports.deleteUserInfo = async (req, res) => {
  console.log("****************** deleteUserInfo ", req.body);
  // Model.deleteUserInfo(req.body, (rows) => {
  //   console.log(rows);
  //   res.send("성공!");
  // });
  const result = await Model.Model.destroy({
    where: { userid: req.body.id },
  });
  res.end();
};
