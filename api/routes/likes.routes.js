const express = require("express");
const router = express.Router();

const LikesController = require("../controllers/likes.controller.js");
const likesRouter = new LikesController();

router.put("/posts/:postId", likesRouter.like);

module.exports = router;