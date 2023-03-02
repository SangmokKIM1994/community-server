const express = require("express");
const router = express.Router();

const JoiHelper = require("../helpers/joi.helper");
const CommentsController = require("../controllers/comments.controller.js");
const loginMiddleware = require("../middlewares/login.middleware");
const authMiddleware = require("../middlewares/auth.middleware.js");
const commentsController = new CommentsController();

// 특정 게시물의 댓글 작성
router.post(
  "/posts/:postId/comments",
  authMiddleware,
  JoiHelper.commentCheck,
  JoiHelper.postId,
  commentsController.createComment
);

// 특정 게시물의 댓글 목록 조회
router.get(
  "/posts/:postId/comments",
  JoiHelper.postId,
  commentsController.getCommentsByPost
);

// 특정 게시물의 댓글 수정
router.put(
  "/comments/:commentId",
  JoiHelper.commentCheck,
  JoiHelper.commentId,
  loginMiddleware,
  commentsController.editComment
);

// 특정 게시물의 댓글 삭제
router.delete(
  "/comments/:commentId",
  authMiddleware,
  JoiHelper.commentId,
  commentsController.deleteComment
);

module.exports = router;
