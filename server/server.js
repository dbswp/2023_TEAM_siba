const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();
const path = require("path");

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const dataRouter = require("./routes/data");
const seoulDataRouter = require("./routes/seoulDataName");
const pushAlarmRouter = require("./routes/webPush");
const boardRouter = require("./routes/boardPrint");

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser("dbswp"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/client/build")));
app.use(bodyParser.json()); // json 형태로 전달
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/data", dataRouter);
app.use("/nameData", seoulDataRouter);
app.use("/push", pushAlarmRouter);
app.use("/board", boardRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("/", (req, res) => {
  res.send("연결 성공");
});
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode).send("Something went wrong...");
});

app.listen(port, () => {
  console.log(`THE SERVER IS OPEN ON PORT ${port}...!!`);
});
