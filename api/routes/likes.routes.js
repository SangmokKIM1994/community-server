const express = require("express");
const router = express.Router();
const loginMiddleware = require("../middlewares/login.middleware");
const JoiHelper = require("../helpers/joi.helper");
const LikesController = require("../controllers/likes.controller.js");
const likesRouter = new LikesController();

router.put(
  "/posts/:postId",
  JoiHelper.commentId,
  loginMiddleware,
  likesRouter.like
);

module.exports = router;
