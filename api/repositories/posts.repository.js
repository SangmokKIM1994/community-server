const { Comments, Users, Posts, Likes, sequelize } = require("../../db/models");
const parseModelToFaltObjet = require("../helpers/parse.sequelize.helper.js");

class PostsRepository {
  createPost = async (userId, title, content) => {
    const createPostData = await Posts.create({ userId, title, content });

    return createPostData;
  };

  getAllPosts = async () => {
    const allPostsData = await Posts.findAll({
      attributes: [
        "postId",
        "title",
        [
          sequelize.fn("COUNT", sequelize.col("Comments.postId")),
          "commentsCount",
        ],
      ],
      include: [{ model: Comments, attributes: [] }],
      group: ["Posts.postId"],
      order: [["createdAt", "DESC"]],
      raw: true,
    }).then((model) => model.map(parseModelToFaltObjet));

    return allPostsData;
  };

  findOnePost = async (postId) => {
    const postData = await Posts.findOne({
      where: { postId },
      attributes: [
        "postId",
        "title",
        "content",
        [
          sequelize.fn("COUNT", sequelize.col("Comments.postId")),
          "commentsCount",
        ],
        "createdAt",
        "updatedAt",
      ],
      include: [
        { model: Users, attributes: ["nickname"] },
        { model: Comments, attributes: [] },
      ],
      raw: true,
    }).then((model) => parseModelToFaltObjet(model));

    return postData;
  };

  findOneLikeCount = async (postId) => {
    const findLikeAll = await Likes.count({ where: { postId } });

    return findLikeAll;
  };

  findLikeState = async (userId, postId) => {
    const findLike = await Likes.findOne({ where: { userId, postId } });
    if (!findLike) {
      return false;
    } else {
      return true;
    }
  };

  findHavePost = async (userId, postId) => {
    const findPost = await Posts.findOne({ where: { userId, postId } });

    return findPost;
  };

  editPost = async (userId, postId, title, content) => {
    const update = await Posts.update(
      { title, content },
      { where: { userId, postId } }
    );

    return update;
  };

  deletePost = async (userId, postId) => {
    const deletePost = await Posts.destroy({ where: { userId, postId } });
    return deletePost;
  };
}

module.exports = PostsRepository;
