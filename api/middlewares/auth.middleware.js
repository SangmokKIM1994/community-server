const jwt = require("jsonwebtoken");
const { Users } = require("../../db/models");

module.exports = async (req, res, next) => {
  const { authorization } = req.cookies;
  const [tokenType, token] = (authorization ?? "").split(" ");
  if (tokenType !== "Bearer" || !token) {
    return res.status(401).json({
      errormessage: "로그인 후에 이용할 수 있는 기능입니다.",
    });
  }

  try {
    const { userId } = jwt.verify(token, process.env.JWT_KEY);
    const user = await Users.findOne({ where: { userId } });
    res.locals.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "토큰이 일치하지 않습니다.",
    });
  }
};
