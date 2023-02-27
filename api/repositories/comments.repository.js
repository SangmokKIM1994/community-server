const { Comments, Users } = require("../../db/models");
const parseModelToFaltObjet = require("../helpers/parse.sequelize.helper.js");

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
  getCommentsByPost = async ({ postId }) => {
    const comments = await Comments.findAll({
      where: { postId },
      attributes: ["commentId", "comment", "userId", "createdAt", "updatedAt"],
      include: {
        model: Users,
        attributes: ["nickname"],
      },
      order: [["createdAt", "DESC"]],
      raw: true, // true 로 쓰면 model.attribute 형태로 출력
    }).then((model) => model.map(parseModelToFaltObjet));
    return comments;
  };

  // 특정 댓글 조회
  getCommentById = async ({ commentId }) => {
    const comment = await Comments.findByPk(commentId, {
      attributes: ["commentId", "comment", "userId", "createdAt", "updatedAt"],
      include: {
        model: Users,
        attributes: ["nickname"],
      },
      raw: true,
    }).then((model) => parseModelToFaltObjet(model));
    return comment;
  };

  // 댓글 수정
  editComment = async ({ commentId, comment }) => {
    const updated = await Comments.update(
      { comment },
      { where: { commentId } }
    );
    return updated;
  };

  // 댓글 삭제
  deleteComment = async ({ commentId }) => {
    const deleted = await Comments.destroy({ where: { commentId } });
    return deleted;
  };
};
