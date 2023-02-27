const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware")
const UsersRouter = require("./users.route.js");
const PostsRouter = require("./posts.route");
const CommentsRouter = require("./comments.route.js");
const router = express.Router();
router.use("/", UsersRouter);
router.use("/posts", PostsRouter);
router.use("/", CommentsRouter);


router.get("/", (_req, res) => {
  res.send("정상적으로 요청되었습니다.");
});

module.exports = router;
