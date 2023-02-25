const UserService = require("../services/users.service");
const jwt = require("jsonwebtoken");

class UsersController {
  userService = new UserService();

  //회원가입
  createSignup = async (req, res, next) => {
    const { nickname, password, confirm } = req.body;
    //서비스 계층에 구현된 createPost로직을 실행한다.
    const createSignupData = await this.userService.createSignup(
      nickname,
      password,
      confirm
    );

    res.status(201).json({ data: createSignupData });
  };

  //로그인
  createLogin = async (req, res, next) => {
    const { nickname, password } = req.body;
    const loginData = await this.userService.createLogin(
      nickname,
      password
  );
  

    const token = jwt.sign(
      { nickname: loginData.nickname },
      "customized-secret-key"
    );
    res.cookie("authorization", `Bearer ${token}`);
    res.status(200).json({ data: loginData });
    return {
      nickname: loginData.nickname,
      password: loginData.password,
    };
  };
}

module.exports =UsersController;



//서비스에서 처리할 로직
//   const token = jwt.login({ nickname: loginData.nickname }, "customized-secret-key");
//   res.cookie("authorization", `Bearer ${token}`);
//   res.status(200).json({ data: loginData })
// }
