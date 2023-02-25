const cookieparser = require("cookie-parser");
const dotenv = require("dotenv");
const express = require("express");
dotenv.config();

const app = express();
const PORT = process.env.PORT;



const router = require("./api/routes");

app.use(express.json());
app.use(cookieparser());

app.use("/", router);

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