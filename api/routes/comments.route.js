const express = require("express");
const router = express.Router();

const CommentsController = require("../controllers/comments.controller.js");
const commentsController = new CommentsController();

// 특정 게시물의 댓글 작성
router.post("/posts/:postId/comments", commentsController.createComment);

// 특정 게시물의 댓글 목록 조회
router.get("/posts/:postId/comments", commentsController.getCommentsByPost);

// 특정 게시물의 댓글 수정
router.patch("/comments/:commentId", commentsController.editComment);

// 특정 게시물의 댓글 삭제
router.delete("/comments/:commentId", commentsController.deleteComment);

module.exports = router;
