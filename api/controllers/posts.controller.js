const PostsService = require("../services/posts.service");

class PostsController {
  postsService = new PostsService();

  createPost = async (req, res, next) => {
    const { userId } = res.locals.user;
    const { title, content } = req.body;

    try {
      if (req.file) {
        const filename = req.file.key;
        const fileUrl = req.file.location;
        await this.postsService.createPost(
          userId,
          title,
          content,
          filename,
          fileUrl
        );
      } else {
        await this.postsService.createPost(userId, title, content);
      }
      res.status(201).json({ message: "게시글이 생성되었습니다." });
    } catch (err) {
      next(err);
    }
  };

  getAllPosts = async (req, res, next) => {
    try {
      const allPostsData = await this.postsService.getAllPosts();

      res.status(200).json({ data: allPostsData });
    } catch (err) {
      next(err);
    }
  };

  findOnePost = async (req, res, next) => {
    if (!res.locals.user) {
      res.locals.user = { userId: 0 };
    }
    const { userId } = res.locals.user;
    const { postId } = req.params;

    try {
      const postData = await this.postsService.findOnePost(userId, postId);

      res.status(200).json({ data: postData });
    } catch (err) {
      next(err);
    }
  };

  editPost = async (req, res, next) => {
    const { userId } = res.locals.user;
    const { postId } = req.params;
    const { title, content } = req.body;

    try {
      if (req.file) {
        const filename = req.file.key;
        const fileUrl = req.file.location;
        console.log(
          "Controller.edit : ",
          userId,
          postId,
          title,
          content,
          filename,
          fileUrl
        );
        await this.postsService.editPost(
          userId,
          postId,
          title,
          content,
          filename,
          fileUrl
        );
        res.status(200).json({ massege: "게시글이 수정되었습니다." });
      } else {
        console.log("Controller.edit : ", userId, postId, title, content);
        await this.postsService.editPost(userId, postId, title, content);
      }
    } catch (err) {
      next(err);
    }
  };

  deletePost = async (req, res, next) => {
    const { userId } = res.locals.user;
    const { postId } = req.params;

    try {
      await this.postsService.deletePost(userId, postId);

      res.status(200).json({ massege: "게시글이 삭제되었습니다." });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = PostsController;
