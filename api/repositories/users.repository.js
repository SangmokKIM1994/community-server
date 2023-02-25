
const { Users } = require("../../db/models");


class UsersRepository {
  
  //회원가입 리포
  createSignup = async (username, nickname, password) => {
    return await Users.create({ username, nickname, password });
  };

  //로그인 리포
  createLogin = async (username, password) => {
    return await Users.findOne({ where: { username, password } });
  };//attributes                                                 
}


module.exports = UsersRepository;