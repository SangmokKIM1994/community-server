const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();
// 미들웨어추가
router.post("/signup",usersController.createSignup);
router.post("/", usersController.createLogin);

module.exports = router;