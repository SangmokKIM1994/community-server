const { Users } = require("../../db/models");

class UsersRepository {
  //회원가입 리포
  createSignup = async ({ username, nickname, password }) => {
    
    const result = await Users.create({ username, nickname, password });
   
    return result;
  };

  //로그인 리포
  createLogin = async ({ username, password }) => {
    
    return await Users.findOne({ where: { username, password } });
  };
}

module.exports = UsersRepository;
