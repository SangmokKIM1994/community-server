const UsersService = require("../services/users.service");
// const jwt = require("jsonwebtoken");

class UsersController {
  usersService = new UsersService();

  //회원가입
  createSignup = async (req, res, next) => {
    const { username, nickname, password } = req.body;

    await this.usersService.createSignup(username, nickname, password );

    res.status(201).json({
      success: true,
      message: "회원가입을 성공하였습니다.",
    });
  };

  //로그인
  createLogin = async (req, res, next) => {
    const { username, password } = req.body;
    await this.usersService.createLogin(username, password);

    res.status(201).json({
      success: true,
      message: "로그인을 성공하였습니다.",
    });
  };
}
module.exports = UsersController;

// const token = jwt.sign(
//   { nickname: loginData.nickname },
//   "customized-secret-key"
// );
// res.cookie("authorization", `Bearer ${token}`);
// res.status(200).json({ data: loginData });
// return {
//   nickname: loginData.nickname,
//   password: loginData.password,
// };
