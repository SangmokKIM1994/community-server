const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/comments.controllers/js");
const commentsRouter = new CommentController();

// 특정 게시물의 댓글 작성
router.post("/posts/:postId/comments", commentsRouter.createComment);

// 특정 게시물의 댓글 목록 조회
router.get("/posts/:postId/comments", commentsRouter.getCommentsByPost);

// 특정 게시물의 댓글 수정
router.put("/comments/:commentId", commentsRouter.editComment);

// 특정 게시물의 댓글 삭제
router.delete("/comments/:commentId", commentsRouter.deleteComment);

module.exports = router;
