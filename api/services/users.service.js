const UserRepository = require("../repositories/users.repository");
const jwt = require("jsonwebtoken");

class UserService {
  userRepository = new UserRepository();

  //회원가입 서비스
  createSignup = async (nickname, password, confirm) => {
    //컨트롤러에서 받아온값들
    const findSignupUser = await this.userRepository.createSignup(
      nickname,
      password
    ); //리포지에는 닉넴,비번만 받으면됨

    return {
      nickname: findSignupUser.nickname,
      password: findSignupUser.password,
      confirm: findSignupUser.confirm,
    };
  };

  // 로그인 서비스
  createLogin = async (nickname, password) => {
    return await this.userRepository.createLogin( 
      nickname,
      password
    );
  
  };
}

module.exports = UserService; //@@@new와 ()확인하기

//요청에 대한 처리를 서비스로, 데이터내용 검증
//로직처리?
//데이터 찾기?
