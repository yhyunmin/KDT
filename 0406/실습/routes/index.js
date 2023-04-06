const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

//메인 화면
router.get('/', controller.getIndex);

//로그인 화면
router.get('/login', controller.getLogin);

//회원가입 화면
router.get('/register', controller.getRegister);

//내정보 화면
router.get('/my_profile', controller.getMyProfile);

module.exports = router;
