const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const loginMiddleware = require("../middlewares/login.middleware");
const PostsController = require("../controllers/posts.controller");
const postsController = new PostsController();

router.post("/", loginMiddleware, postsController.createPost);
router.get("/", postsController.getAllPosts);
router.get("/:postId", authMiddleware, postsController.findOnePost);
router.put("/:postId", loginMiddleware, postsController.editPost);
router.delete("/:postId", loginMiddleware, postsController.deletePost);

module.exports = router;
