const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const JoiHelper = require("../helpers/joi.helper")
const LikesController = require("../controllers/likes.controller.js");
const likesRouter = new LikesController();

router.put("/posts/:postId",JoiHelper.commentId, authMiddleware, likesRouter.like);

module.exports = router;
