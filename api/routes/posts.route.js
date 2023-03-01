const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const uploadMiddleware = require("../middlewares/upload.middleware");
const PostsController = require("../controllers/posts.controller");
const postsController = new PostsController();

router.post("/", authMiddleware, uploadMiddleware, postsController.createPost);
router.get("/", postsController.getAllPosts);
router.get("/:postId", authMiddleware, postsController.findOnePost);
router.put("/:postId", authMiddleware, postsController.editPost);
router.delete("/:postId", authMiddleware, postsController.deletePost);

module.exports = router;
