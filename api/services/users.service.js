const UsersRepository = require("../repositories/users.repository");

class UsersService {
  usersRepository = new UsersRepository();

  //회원가입 서비스
  //username 조건, @가 없다던가, 특수문자가 섞였다던가.
  createSignup = async (username, nickname, password) => {
    const signupData = await this.usersRepository.createSignup(
      username,
      nickname,
      password
    );
   
    return signupData;

  };
  

  // 로그인 서비스
  createLogin = async (username, password) => {
    const loginData = await this.usersRepository.createLogin(
      username,
      password
    );
    return loginData.map((user) => {
      return {
        username: user.username,
        password: user.password,
      }; //데이터가공 (password 보안때문)
    });
  };
}

module.exports = UsersService;
