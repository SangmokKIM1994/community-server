const cookieparser = require("cookie-parser");
const dotenv = require("dotenv");
const express = require("express");
const router = require("./api/routes");
const errorMiddleware = require("./api/middlewares/error.middleware.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieparser());

app.use("/api", router);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
