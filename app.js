const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("안녕하세요 이효원입니다");
});

app.post("/test", (req, res) => {
  res.send("포스트 테스트중 ");
});

app.listen(3000, () => {
  console.log("서버가 열렸습니다");
});
// 서버가 꺼지면 요청을 받을 수 없다. 특정 포트를 열고 기다려야한다 그것이 app.listen이다
//동작해야 요청을 받을 수 있다.
