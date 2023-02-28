const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const LikesController = require("../controllers/likes.controller.js");
const likesRouter = new LikesController();

router.put("/posts/:postId", authMiddleware, likesRouter.like);

module.exports = router;
