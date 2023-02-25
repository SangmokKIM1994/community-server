const CommentsService = require("../services/comments.services.js");

module.exports = class CommentsController {
  constructor() {
    this.commentsService = new CommentsService();
  }
  // 댓글 작성
  createComment = async (req, res) => {
    const { postId } = req.params;
    const { content } = req.body;
    if (!(postId && content)) {
      throw new Error("댓글 작성에 실패하였습니다.");
    }
    const result = await this.commentsService.createComment({
      postId,
      content,
    });
    return res.status(200).json(result);
  };

  // 댓글 목록 조회
  getCommentsByPost = async (req, res) => {};

  // 댓글 수정
  editComment = async (req, res) => {};

  // 댓글 삭제
  deleteComment = async (req, res) => {};
};
