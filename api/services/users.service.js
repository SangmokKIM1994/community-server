const bcrypt = require("bcrypt");
const UsersRepository = require("../repositories/users.repository");

class UsersService {
  usersRepository = new UsersRepository();

  //회원가입 서비스
  createSignup = async ({ email, nickname, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const signupData = await this.usersRepository.createSignup({
      email,
      nickname,
      password: hashedPassword,
    });
    if (!signupData) {
      throw new Error("회원가입을 실패하셨습니다.");
    }
    return signupData;
  };

  //이메일 중복검사
  emailCheck = async ({ email }) => {
    const existEmail = await this.usersRepository.emailCheck({
      email,
    });

    if (existEmail) {
      throw new Error("중복된 이메일입니다.");
    }
    return;
  };

  //닉네임 중복검사
  nicknameCheck = async ({ nickname }) => {
    const existNickname = await this.usersRepository.nicknameCheck({
      nickname,
    });

    if (existNickname) {
      throw new Error("중복된 닉네임입니다.");
    }
    return;
  };

  // 로그인 서비스
  createLogin = async ({ email, password }) => {
    // 이메일 존재 여부 확인
    const existUser = await this.usersRepository.getUserEmail({ email });
    if (!existUser) {
      throw new Error("존재하지 않는 회원입니다.");
    }
    // 비밀번호 일치 여부 확인
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existUser.password
    );
    if (!isPasswordCorrect) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }
    return existUser;
  };
}

module.exports = UsersService;
