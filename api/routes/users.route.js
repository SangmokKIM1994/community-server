const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();

router.post("/signup", usersController.createSignup);
router.get("/check", usersController.duplicateCheck);
router.post("/login", usersController.createLogin);

module.exports = router;
