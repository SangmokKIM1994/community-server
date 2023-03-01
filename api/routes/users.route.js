const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();

router.post("/signup", authMiddleware, usersController.createSignup);
router.post("/login", usersController.createLogin);

module.exports = router;
