const UsersRepository = require("../repositories/users.repository");

class UsersService {
  usersRepository = new UsersRepository();

  //회원가입 서비스
  //회원가입실패 400
  createSignup = async ({ username, nickname, password }) => {
   
    const signupData = await this.usersRepository.createSignup({
      username,
      nickname,
      password
  });
  return signupData
    // const emailType = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z\-]+/;
    // const passwordType = /^[a-zA-Z0-9](6,10)&/;
     
    // if (!signupData.username) {
    //   throw new Error (
        
    //      "중복된 이메일이 존재합니다."
       
    //   )
    
    
    // if (signupData.password !== passwordType) {
    //   return res.status(401).json({ success: false,
    //     message: "회원가입을 실패하였습니다." })
    // }
  };

  // 로그인 서비스
  createLogin = async ({ username, password }) => {
   
    const loginData = await this.usersRepository.createLogin({
      username,
      password
  });
    if (!loginData) {
      res.status(401).json({ success: false, message: "로그인에 실패하였습니다." });
    }

    return loginData;
  };
}

module.exports = UsersService;
