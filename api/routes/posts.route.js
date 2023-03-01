const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const JoiHelper = require("../helpers/joi.helper");
const loginMiddleware = require("../middlewares/login.middleware");
const PostsController = require("../controllers/posts.controller");
const postsController = new PostsController();

router.post(
  "/",
  authMiddleware,
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
router.put(
  "/:postId",
  authMiddleware,
  JoiHelper.postCheck,
  JoiHelper.postId,
  // JoiHelper.userId,
  postsController.editPost
);
router.delete(
  "/:postId",
  authMiddleware,
  JoiHelper.postId,
  postsController.deletePost
);


module.exports = router;
