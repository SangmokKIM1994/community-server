const PostsService = require("../services/posts.service");

class PostsController {
  postsService = new PostsService();

  createPost = async (req, res, next) => {
    // const {userId} = res.locals.user;
    const { title, content, image } = req.body;

    try {
      await this.postsService.createPost(title, content, image);

      res
        .status(201)
        .json({ success: true, message: "게시글이 생성되었습니다." });
    } catch (err) {
      next(err);
    }
  };

  getAllPosts = async (req, res, next) => {
    try {
      const allPostsData = await this.postsService.getAllPosts();

      res.status(200).json({ success: true, data: allPostsData });
    } catch (err) {
      next(err);
    }
  };

  findOnePost = async (req, res, next) => {
    const { postId } = req.params;

    try {
      const postData = await this.postsService.findOnePost(postId);

      res.status(200).json({ success: true, data: postData });
    } catch (err) {
      next(err);
    }
  };

  editPost = async (req, res, next) => {
    // const { userId } = res.locals.user;
    const { postId } = req.params;
    const { title, content } = req.body;

    try {
      await this.postsService.editPost(postId, title, content);

      res
        .status(200)
        .json({ success: true, massege: "게시글이 수정되었습니다." });
    } catch (err) {
      next(err);
    }
  };

  deletePost = async (req, res, next) => {
    const { postId } = req.params;

    try {
      await this.postsService.deletePost(postId);

      res
        .status(200)
        .json({ success: true, massege: "게시글이 삭제되었습니다." });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = PostsController;
