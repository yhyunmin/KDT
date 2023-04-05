const express = require("express");
const controller = require("../controller/main");
const model = require("../model/model");
const router = express.Router();

// 메인 페이지
router.get("/", controller.main);
router.post("/axios", controller.checkID);
// router.post("/axios", controller.userCheckID);

module.exports = router;
