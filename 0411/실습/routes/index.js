const express = require("express");
const controller = require("../controller/Cmain");
const visitor = require("../controller/Cvisitior");
const session = require("../controller/Session");
const { deleteSession } = require("../controller/Session");
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

router.get("/visitor", visitor.getVisitors); // 전체 조회

// POST /visitor/write
router.post("/visitor/write", visitor.postVisitor); // 코멘트 하나 추가

router.delete("/visitor/delete", visitor.deleteVisitor); // 코멘트 하나 삭제

//GET visitor/get
router.get("/visitor/get", visitor.getVisitor); // 코멘트 하나 조회
module.exports = router;

// PATCH /visitor/edit
router.patch("/visitor/edit", visitor.patchVisitor); // 하나 수정

//POST setSession
// router.post("/postSession", session.postSession);

//GET getSession
// router.get("/getSession", session.getSession);
//DELETE deleteSession

// router.delete("/deleteSession", session.deleteSession);
router.get("/logout", session.deleteSession);

router.get("/test", session.test);
module.exports = router;
