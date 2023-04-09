const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

console.log(">>>>>>>>>>>>>>>>>>>>>>", controller);

//메인 화면
router.get("/", controller.getIndex);

//로그인 화면
router.get("/login", controller.getLogin);
//로그인 아이디 확인
router.post("/checkLogin", controller.postCheckLogin);

//회원가입 화면
router.get("/register", controller.getRegister);
// 회원가입 아이디 중복 검사
router.post("/check_userid", controller.postCheckUserId);
// 회원가입 성공 화면
router.post("/result", controller.getResult);

// 내정보 화면
router.post("/my_profile", controller.postMyProfile);
// 내정보 수정 화면
router.patch("/patchUserInfo", controller.patchUserInfo);

router.delete("/my_profile/delete", controller.deleteUserInfo);

module.exports = router;
