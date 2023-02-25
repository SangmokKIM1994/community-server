const CommentsRepository = require("../repositories/comments.repository.js");

module.exports = class CommentsService {
  constructor() {
    this.commentsRepository = new CommentsRepository();
  }
  // 댓글 작성
  createComment = async ({ userId, postId, comment }) => {
    // postId를 검증하는 예외 처리 필요

    const result = await this.commentsRepository.createComment({
      userId,
      postId,
      comment,
    });
    if (!result) {
      throw new Error("댓글 작성에 실패하였습니다.");
    }
    return { success: true, message: "댓글이 생성되었습니다." };
  };

  // 댓글 목록 조회
  getCommentsByPost = async ({ postId }) => {
    // postId를 검증하는 예외 처리 필요
    const comments = await this.commentsRepository.getCommentsByPost({
      postId,
    });
    if (!comments) {
      throw new Error("댓글 목록 조회에 실패하였습니다.");
    }
    return { success: true, comments };
  };

  // 댓글 수정
  editComment = async ({ commentId, comment }) => {
    const existComment = await this.commentsRepository.getCommentById({
      commentId,
    });
    if (!existComment) {
      throw new Error("댓글 조회에 실패하였습니다.");
    }
    const updated = await this.commentsRepository.editComment({
      commentId,
      comment,
    });
    console.log(updated);
    if (!updated) {
      throw new Error("댓글 수정에 실패하였습니다.");
    }
    return { success: true, message: "댓글이 수정되었습니다." };
  };

  // 댓글 삭제
  deleteComment = async (commentId) => {};
};
