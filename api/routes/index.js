const express = require("express");
const router = express.Router();

const commentsRouter = require("./comments.route.js");

router.use("/api", [commentsRouter]);

router.get("/", (req, res) => {
  res.send("정상적으로 요청되었습니다.");
});

module.exports = router;
