const { Posts, Likes } = require("../../db/models");

class LikesRepository {
  findPost = async (postId) => {
    return await Posts.findOne({ where: { postId } });
  };

  findLike = async(userId, postId) => {
    return await Likes.findOne({ where: { userId, postId } });
  }
  
  deleteLike = async (userId, postId) => {
    Likes.destroy({where: {userId, postId}})
    return
  };

  createLike = async(userId,postId) => {
    Likes.create({ userId, postId });
    return
  }
}

module.exports = LikesRepository;
