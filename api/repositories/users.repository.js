const { Users } = require("../../db/models");

class UsersRepository {
  //회원가입 리포
  createSignup = async ({ username, nickname, password }) => {
    console.log("repo", username, nickname, password);
    const result = await Users.create({ username, nickname, password });
    console.log(result)
    return result;
  };

  //로그인 리포
  createLogin = async ({ username, password }) => {
    console.log(username);
    return await Users.findOne({ where: { username, password } });
  };
}

module.exports = UsersRepository;
