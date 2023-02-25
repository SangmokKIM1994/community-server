const express = require("express");
const UsersRouter = require("./usersRoute.js");
const router = express.Router();

router.use("/api", UsersRouter);

router.get("/", (req, res) => {
  res.send("정상적으로 요청되었습니다.");
});

module.exports = router;
