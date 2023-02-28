const UsersService = require("../services/users.service");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/auth.middleware.js");

class UsersController {
  usersService = new UsersService();

  //회원가입
  createSignup = async (req, res, next) => {
    const { email, nickname, password } = req.body;

    try {
      await this.usersService.createSignup({
        email,
        nickname,
        password,
      });
      return res.status(201).json({ message: "회원가입을 성공하셨습니다." });
    } catch (err) {
      next(err);
    }
  };

  //로그인
  createLogin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const loginData = await this.usersService.createLogin({
        email,
        password,
      });
      const token = jwt.sign(
        { userId: loginData.userId },
        process.env.JWT_KEY,
        {
          expiresIn: "5m",
        }
      );

      res.cookie("authorization", `Bearer ${token}`);
      return res.status(201).json({
        message: "로그인을 성공하였습니다.",
        token,
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UsersController;
