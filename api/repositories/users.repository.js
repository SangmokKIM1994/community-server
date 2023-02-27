
const { Users } = require("../../db/models");


class UsersRepository {
  
  //회원가입 리포
  createSignup = async ({ username, nickname, password }) => {
    console.log("repo", username, nickname, password)
    return await Users.create({ username, nickname, password });
  };

  //로그인 리포
  createLogin = async ({ username, password }) => {
    console.log(username)
    return await Users.findOne({ where: { username, password } });
  };                                               
}


module.exports = UsersRepository;