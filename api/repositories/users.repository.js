//리포에서 sequelize를 통해서 Users테이블에 접근을 하기 위해서 사용하는거
const { Users } = require("../models");

class UserRepository {
  
  //회원가입 리포, 회원 생성
  createSignup = async (nickname, password) => {
    return await Users.create({ nickname, password });
  };

  //로그인 리포
  //닉넴,비번
  createLogin = async (nickname, password) => {
    return await Users.findOne({ where: { nickname, password } });
  };
}


module.exports = UserRepository;