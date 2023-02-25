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
    return { success: true, message: "댓글이 생성되었습니다." };
  };

  // 댓글 목록 조회
  getCommentsByPost = async (postId) => {};

  // 댓글 수정
  editComment = async (commentId) => {};

  // 댓글 삭제
  deleteComment = async (commentId) => {};
};
