const express = require('express');
const controller = require('../controller/Cvisitior');
const router = express.Router();

// get /
router.get('/', controller.main);
// GET /visitor =
router.get('/visitor', controller.getVisitors); // 전체 조회

// POST /visitor/write
router.post('/visitor/write', controller.postVisitor); // 코멘트 하나 추가

module.exports = router;
