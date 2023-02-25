const UsersRepository = require("../repositories/users.repository");

class UsersService {
  usersRepository = new UsersRepository();

  //회원가입 서비스
  createSignup = async ({ username, nickname, password }) => {
    const signupData = await this.usersRepository.createSignup(
      username,
      nickname,
      password
    );

    return signupData;
  };

  // 로그인 서비스
  createLogin = async (username, password) => {
    console.log(username)
    const loginData = await this.usersRepository.createLogin(
    
      username,
      password
    );
    
    return loginData; 
  };
}

module.exports = UsersService;
