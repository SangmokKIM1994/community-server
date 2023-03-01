const Joi = require("joi");
const { BadRequestError } = require("../exceptions/customError");

const JoiHelper = {
  signUpCheck: async (req, res, next) => {
    const check = Joi.object().keys({
      email: Joi.string()
        .regex(
          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
        )
        .error(new BadRequestError("email형식에 맞춰서 입력바랍니다.")),
      password: Joi.string()
        .regex(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/)
        .error(
          new BadRequestError(
            "비밀번호는 6자리이상 10자리 이하 영문,숫자 조합입니다."
          )
        ),
      nickname: Joi.string()
        .regex(/^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{1,10}$/)
        .error(
          new BadRequestError(
            "닉네임은 특수문자 제외 1~10자만 가능합니다."
          )
        ),     
    });
    try {
      await check.validateAsync(req.body);
    } catch (error) {
      next(error);
    }
    next();
  },

  loginCheck: async (req, res, next) => {
    const check = Joi.object().keys({
      email: Joi.string()
        .regex(
          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
        )
        .error(new BadRequestError("email형식에 맞춰서 입력바랍니다.")),
      password: Joi.string()
        .regex(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/)
        .error(
          new BadRequestError(
            "비밀번호는 6자리이상 10자리 이하 영문,숫자 조합입니다."
          )
        ),
    });
    try {
      await check.validateAsync(req.body);
    } catch (error) {
      next(error);
    }
    next();
  },

  postCheck: async (req, res, next) => {
    const check = Joi.object().keys({
      title: Joi.string()
        .min(2)
        .error(new BadRequestError("2글자 이상 입력해야합니다.")),
      content: Joi.string()
        .min(2)
        .error(new BadRequestError("2글자 이상 입력해야합니다.")),
    });
    try {
      await check.validateAsync(req.body);
    } catch (error) {
      next(error);
    }
    next();
  },

  commentCheck: async (req, res, next) => {
    const check = Joi.object().keys({
      comment: Joi.string()
        .min(2)
        .error(new BadRequestError("2글자 이상 입력해야합니다.")),
    });
    try {
      await check.validateAsync(req.body);
    } catch (error) {
      next(error);
    }
    next();
  },
};

module.exports = JoiHelper;
