const express = require("express");
const router = express.Router();
const JoiHelper = require("../helpers/joi.helper");
const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();

router.post("/signup", JoiHelper.signUpCheck, usersController.createSignup);
router.get("/check", usersController.duplicateCheck);
router.post("/login", JoiHelper.loginCheck, usersController.createLogin);


module.exports = router;
