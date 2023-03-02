const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const JoiHelper = require("../helpers/joi.helper");
const loginMiddleware = require("../middlewares/login.middleware");
const uploadMiddleware = require("../middlewares/upload.middleware");
const PostsController = require("../controllers/posts.controller");
const postsController = new PostsController();

router.post(
  "/",
  loginMiddleware,
  uploadMiddleware,
  JoiHelper.postCheck,
  postsController.createPost
);
router.get("/", postsController.getAllPosts);
router.get(
  "/:postId",
  authMiddleware,
  JoiHelper.postId,
  postsController.findOnePost
);
router.patch(
  "/:postId",
  loginMiddleware,
  uploadMiddleware,
  async (req, res, next) => {
    next();
  },
  JoiHelper.postCheck,
  JoiHelper.postId,
  // JoiHelper.userId,
  postsController.editPost
);
router.delete(
  "/:postId",
  loginMiddleware,
  JoiHelper.postId,
  postsController.deletePost
);

module.exports = router;
