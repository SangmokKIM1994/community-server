const express = require("express");
const UsersRouter = require("./usersRoute.js");
const PostsRouter = require("./posts.route");
const CommentsRouter = require("./comments.route.js");
const router = express.Router();

router.use("/", UsersRouter);
router.use("/posts", PostsRouter);
router.use("/", CommentsRouter);


router.get("/", (req, res) => {
  res.send("정상적으로 요청되었습니다.");
});

module.exports = router;
