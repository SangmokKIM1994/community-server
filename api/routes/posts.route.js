const express = require("express");
const router = express.Router();
const PostsController = require("../controllers/posts.controller");
const postsController = new PostsController();

router.post("/", postsController.createPost);
router.get("/", postsController.getAllPosts);
router.get("/:postId", postsController.findOnePost)
router.put("/:postId", postsController.editPost)
router.delete("/:postId", postsController.deletePost)


module.exports = router;