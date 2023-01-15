// 헤더, 바디에 데이터 보내고 받기 연습

const express = require("express");
const cookieparser = require("cookie-parser");
// const nodemon = require("nodemon");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cookieparser());
// app.use(nodemon);

//쿼리스트링으로 정상적으로 정보가 넘어오는 것 확인- 성공

// app.get("/", (req, res) => {
//   console.log(req.query);
//   res.send("쿼리스트링 데이터 전송 확인");
// });

// 파람스 테스트 실패??? -

// app.get("/:id", (req, res) => {
//   res.send(console.log(req.params));
// });

//바디로 데이터 보내기 - 성공

// app.get("/bt", (req, res) => {
//   console.log(req.body);
//   res.send("바디 데이터 전송확인");
// });

//header로 데이터 보내기 연습 -성공

// app.get("/ht", (req, res) => {
//   console.log(req.headers);
//   res.send("헤더 데이터 전송 연습");
// });

app.get("/user/:id/:start/:end", (req, res) => {
  let user_id = req.params["id"];
  let start = req.params["start"];
  let end = req.params["end"];

  console.log("user ID: ", user_id);
  console.log("start ID: ", start);
  console.log("user ID: ", end);
});

app.listen(port, () => {
  console.log(port, "서버운영중");
});
