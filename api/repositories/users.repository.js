const { Users } = require("../../db/models");
const { Op } = require("sequelize");

class UsersRepository {
  //회원가입 리포
  createSignup = async ({ email, nickname, password }) => {
    const result = await Users.create({ email, nickname, password });
    return result;
  };

  //이메일 중복 검사
  emailCheck = async ({ email }) => {
    const result = await Users.findOne({
      where: { email },
    });

    return result;
  };

  //닉네임 중복 검사
  nicknameCheck = async ({ nickname }) => {
    const result = await Users.findOne({
      where: { nickname },
    });

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
