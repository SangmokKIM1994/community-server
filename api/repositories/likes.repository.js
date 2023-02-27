const { Posts, Likes } = require("../../db/models");

class LikesRepository {
  findPost = async (postId) => {
    return await Posts.findOne({ where: { postId } });
  };

  like = async (userId, postId) => {
    const findLike = await Likes.findOne({ where: { userId, postId } });

    if (findLike) {
      Likes.destroy({
        where: { userId: findLike.userId, postId: findLike.postId },
      });
      return "좋아요가 해제되었습니다";
    } else {
      Likes.create({ userId, postId });
      return "좋아요가 등록되었습니다.";
    }
  };
}

module.exports = LikesRepository;
