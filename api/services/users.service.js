const UsersRepository = require("../repositories/users.repository");

class UsersService {
  usersRepository = new UsersRepository();

  //회원가입 서비스
  createSignup = async ({ email, nickname, password }) => {
    // 에러를 검사하는 모든 구문
    const signupData = await this.usersRepository.createSignup({
      email,
      nickname,
      password,
    });
    if (!signupData) {
      throw new Error("회원가입을 실패하셨습니다.");
    }
    return signupData;
  };

  //이메일 중복검사

  //닉네임 중복검사
  //const query = {_id : userId};
  //const result = await coll.countDocuments(qeury)
  //파라미터 유효성, 중복 검사

  // const emailType = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z\-]+/;
  // const passwordType = /^[a-zA-Z0-9](6,10)&/;

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
