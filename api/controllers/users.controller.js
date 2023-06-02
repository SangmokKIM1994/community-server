const UsersService = require("../services/users.service");
const jwt = require("jsonwebtoken");

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

  //이메일과 닉네임 중복검사
  duplicateCheck = async (req, res, next) => {
    const email = req.query.email;
    const nickname = req.query.nickname;
    try {
      if (!nickname) {
        await this.usersService.emailCheck({ email });
        res.status(200).json({ message: "사용가능한 이메일 입니다." });
      }
      if (!email) {
        await this.usersService.nicknameCheck({ nickname });
        res.status(200).json({ message: "사용가능한 닉네임 입니다." });
      }
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
          expiresIn: process.env.JWT_EXPIRESIN,
        }
      );

      res.cookie("authorization", `Bearer ${token}`);
      return res.status(200).json({
        message: "로그인을 성공하였습니다.",
        token,
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UsersController;
