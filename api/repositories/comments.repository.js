const { Comments } = require("../../db/models");

module.exports = class CommentRepository {
  // 댓글 작성
  createComment = async ({ userId, postId, comment }) => {
    const newComment = await Comments.create({
      userId,
      postId,
      comment,
    });
    return newComment;
  };

  // 댓글 목록 조회
  getCommentsByPost = async (postId) => {};

  // 댓글 수정
  editComment = async (commentId) => {};

  // 댓글 삭제
  deleteComment = async (commentId) => {};
};
