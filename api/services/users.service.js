const UsersRepository = require("../repositories/users.repository");

class UsersService {
  usersRepository = new UsersRepository();

  //회원가입 서비스
  //회원가입실패 400
  createSignup = async ({ email, nickname, password }) => {
    const signupData = await this.usersRepository.createSignup({
      email,
      nickname,
      password,
    });
    if (!signupData) {
      throw new Error("회원가입을 실패하였습니다.");
    }
    return signupData;
  };
  // const emailType = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z\-]+/;
  // const passwordType = /^[a-zA-Z0-9](6,10)&/;

  // if (!signupData.email) {
  //   throw new Error (

  //      "중복된 이메일이 존재합니다."

  //   )

  // if (signupData.password !== passwordType) {
  //   return res.status(401).json({ success: false,
  //     message: "회원가입을 실패하였습니다." })
  // }

  // 로그인 서비스
  createLogin = async ({ email, password }) => {
    const loginData = await this.usersRepository.createLogin({
      email,
      password,
    });
    if (!loginData) {
      throw new Error("로그인에 실패하였습니다.");
    }

    return loginData;
  };
}

module.exports = UsersService;
