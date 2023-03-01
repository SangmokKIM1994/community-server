const {
  NotFoundError,
  ForbiddenError,
} = require("../exceptions/customError.js");
const CommentsRepository = require("../repositories/comments.repository.js");

module.exports = class CommentsService {
  constructor() {
    this.commentsRepository = new CommentsRepository();
  }
  // 댓글 작성
  createComment = async ({ userId, postId, comment }) => {
    const result = await this.commentsRepository.createComment({
      userId,
      postId,
      comment,
    });
    if (!result) {
      throw new Error("댓글 작성에 실패하였습니다.");
    }
    return { message: "댓글이 생성되었습니다." };
  };

  // 댓글 목록 조회
  getCommentsByPost = async ({ postId }) => {
    const comments = await this.commentsRepository.getCommentsByPost({
      postId,
    });
    if (!comments) {
      throw new Error("댓글 목록 조회에 실패하였습니다.");
    }
    return { data: comments };
  };

  // 댓글 수정
  editComment = async ({ userId, commentId, comment }) => {
    const existComment = await this.commentsRepository.getCommentById({
      commentId,
    });
    if (!existComment) {
      throw new NotFoundError("댓글 조회에 실패하였습니다.");
      // throw new Error("댓글 조회에 실패하였습니다.");
    }
    if (existComment.userId !== userId) {
      throw new ForbiddenError("권한이 없습니다.");
    }
    const updated = await this.commentsRepository.editComment({
      commentId,
      comment,
    });
    if (!updated) {
      throw new Error("댓글 수정에 실패하였습니다.");
    }
    return { message: "댓글이 수정되었습니다." };
  };

  // 댓글 삭제
  deleteComment = async ({ userId, commentId }) => {
    const existComment = await this.commentsRepository.getCommentById({
      commentId,
    });
    if (!existComment) {
      throw new NotFoundError("댓글 조회에 실패하였습니다.");
    }
    if (existComment.userId !== userId) {
      throw new ForbiddenError("권한이 없습니다.");
    }
    const deleted = await this.commentsRepository.deleteComment({
      commentId,
    });
    if (!deleted) {
      throw new Error("댓글 삭제에 실패하였습니다.");
    }
    return { message: "댓글이 삭제되었습니다." };
  };
};
