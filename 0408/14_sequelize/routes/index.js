const express = require('express');
const controller = require('../controller/Cvisitior');
const router = express.Router();

// get /
router.get('/', controller.main);
// GET /visitor =
router.get('/visitor', controller.getVisitors); // 전체 조회

// POST /visitor/write
router.post('/visitor/write', controller.postVisitor); // 코멘트 하나 추가

router.delete('/visitor/delete', controller.deleteVisitor); // 코멘트 하나 삭제

//GET visitor/get
router.get('/visitor/get', controller.getVisitor); // 코멘트 하나 조회
module.exports = router;

// PATCH /visitor/edit
router.patch('/visitor/edit', controller.patchVisitor); // 하나 수정
