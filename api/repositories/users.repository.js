const { Users } = require("../../db/models");

class UsersRepository {
  //회원가입 리포
  createSignup = async ({ email, nickname, password }) => {
    const result = await Users.create({ email, nickname, password });

    return result;
  };

  //로그인 리포
  createLogin = async ({ email, password }) => {
    const result = await Users.findOne({ where: { email, password } });
    return result;
  };

  // 이메일로 회원 조회
  getUserEmail = async ({ email }) => {
    const result = await Users.findOne({ where: { email } });
    return result;
  };
}

module.exports = UsersRepository;
