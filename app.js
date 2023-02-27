const cookieparser = require("cookie-parser");
const dotenv = require("dotenv");
const express = require("express");
const router = require("./api/routes");
const errorMiddleware = require("./api/middlewares/error.middleware.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use(express.json());
app.use(cookieparser());

app.use("/api", router);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});

// // app.js//sequelize model sync script

// const { sequelize } = require('./models/index.js');

// async function main() {
//   // model을 이용해 데이터베이스에 테이블을 삭제 후 생성합니다.
//   await sequelize.sync({ force: true }); //모델동기화
// }

// main();
