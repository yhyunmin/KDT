const express = require("express");
const controller = require("../controller/Cmain");
// controller = {
//   main : 함수,
//   comments : 함수,
// }
// require controller 는  이런식으로 받아온다.
const router = express.Router(); // express 내장 라우터 객체로 라우터를 만들 수 있다.
// const app = express(); app.get / app._router()

router.get("/",
  //라우팅 기능의 코드만 작성한다.
  // 데이터조회 수정 이런건 XXXX
  controller.main // main 함수를 만들 예정
);
router.get("/comments", controller.comments);

router.get("/comment/:id", controller.comment);

module.exports = router;
//router.post();
