const UsersService = require("../services/users.service");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/auth.middleware.js");

class UsersController {
  usersService = new UsersService();

  //회원가입
  createSignup = async (req, res, next) => {
    
    const { username, nickname, password } = req.body;
    console.log("ct", username, nickname, password)
    
    try{
    await this.usersService.createSignup({ username, nickname, password });
      return res
        .status(201)
        .json({ success: true, message: "회원가입을 성공하였습니다." });
    } catch (
      err
    ) {
      next(err)
    }
  };


//로그인
//로그인성공 201
//유효성 검증 400
//로그인 실패 400
//express-validator, joi 라이브러리
createLogin = async (req, res, next) => {
  const { username, password } = req.body;

    const loginData = await this.usersService.createLogin({ username, password });
    const token = jwt.sign(
      { username: loginData.username },
      "customized-secret-key"
    );
    res.cookie("authorization", `Bearer ${token}`);
    res.status(201).json({
      success: true,
      message: "로그인을 성공하였습니다.",
    });
  };

}
  // checkLogin = async (req, res, next) => {
  //   const 
  // }
module.exports = UsersController;
