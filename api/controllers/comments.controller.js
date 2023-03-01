const { BadRequestError } = require("../exceptions/customError.js");
const CommentsService = require("../services/comments.service.js");

module.exports = class CommentsController {
  constructor() {
    this.commentsService = new CommentsService();
  }
  // 댓글 작성
  createComment = async (req, res, next) => {
    const { userId } = res.locals.user;
    const { postId } = req.params;
    const { comment } = req.body;

    try {
      if (!(postId && comment)) {
        throw new BadRequestError("적절하지 않은 파라미터 요청입니다.");
      }
      const result = await this.commentsService.createComment({
        userId,
        postId,
        comment,
      });
      return res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  };

  // 댓글 목록 조회
  getCommentsByPost = async (req, res, next) => {
    const { postId } = req.params;

    try {
      if (!postId) {
        throw new BadRequestError("적절하지 않은 파라미터 요청입니다.");
      }
      const result = await this.commentsService.getCommentsByPost({
        postId,
      });
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };

  // 댓글 수정
  editComment = async (req, res, next) => {
    const { userId } = res.locals.user;
    const { commentId } = req.params;
    const { comment } = req.body;

    try {
      if (!(commentId && comment)) {
        throw new BadRequestError("적절하지 않은 파라미터 요청입니다.");
      }
      const result = await this.commentsService.editComment({
        userId,
        commentId,
        comment,
      });
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };

  // 댓글 삭제
  deleteComment = async (req, res, next) => {
    const { userId } = res.locals.user;
    const { commentId } = req.params;

    try {
      if (!commentId) {
        throw new BadRequestError("적절하지 않은 파라미터 요청입니다.");
      }
      const result = await this.commentsService.deleteComment({
        userId,
        commentId,
      });
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
};
