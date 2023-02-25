const express = require("express");
const PostsRouter = require("./posts.route")
const router = express.Router();

router.use("/posts", PostsRouter);

module.exports = router;