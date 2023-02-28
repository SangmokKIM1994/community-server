const { Comments, Users, Posts, Likes, sequelize } = require("../../db/models");
const parseModelToFaltObjet = require("../helpers/parse.sequelize.helper.js");

class PostsRepository {
  createPost = async (title, content) => {
    // const userInfo = await users.findOne({where:{userId}})
    const createPostData = await Posts.create({ title, content });

    return createPostData;
  };

  findLikes = async () => {
    const findLike = await Posts.findAll({
      attributes: [
        [sequelize.fn("COUNT", sequelize.col("Likes.postId")), "likesCount"],
      ],
      include: [{ model: Likes, attributes: [] }],
      group: ["Posts.postId"],
      order: [["createdAt", "DESC"]],
      raw: true,
    }).then((model) => model.map(parseModelToFaltObjet));
    return findLike;
  };

  getAllPosts = async () => {
    const allPostsData = await Posts.findAll({
      attributes: [
        "postId",
        "title",
        "likesCount",
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
    const userId = 1
    const findLikeAll = await Likes.findAll({where : {postId}})
    const findLike = await Likes.findOne({where:{userId,postId}})
    const postData = await Posts.findOne({
      where: { postId },
      attributes: [
        "postId",
        "title",
        "content",
        "likesCount",
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
    postData.likesCount = findLikeAll.length
    if(!findLike){
      postData.likeStatus = false
    } else {
      postData.likeStatus = true
    }

    return postData;
  };

  editPost = async (postId, title, content) => {
    const update = await Posts.update(
      { title, content },
      { where: { postId } }
    );

    return update;
  };

  deletePost = async (postId) => {
    return await Posts.destroy({ where: { postId } });
  };
}

module.exports = PostsRepository;
