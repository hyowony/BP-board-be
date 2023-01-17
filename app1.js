const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");
const port = 3000;

//DB에서 users.js, articles 가져오기
// const users = require("./DB/users");
// const artcies = require("./DB/articles");
app.use(cookieparser());
app.use(express.json());

// 연습용 data

// const DB = {
//   name: "hyowon",
//   hobby: "soccer",
//   name: "gangin",
//   hobby: "reading",
//   name: "wun",
//   hobby: "poker",
//   name: "sangjin",
//   hobby: "game",
// };

const movies = [
  {id: 1, movie_title: "Misérables, Les", hit_count: 23, user_id: 1, created_at: "2022-08-11 00:40:32"},
  {id: 3, movie_title: "Captain Ron", hit_count: 1, user_id: 1, created_at: "2022-08-14 18:09:47"},
  {id: 4, movie_title: "Siberia", hit_count: 37, user_id: 9, created_at: "2022-02-08 02:44:29"},
  {id: 5, movie_title: "Girl, The", hit_count: 82, user_id: 6, created_at: "2022-08-29 00:02:21"},
  {id: 6, movie_title: "44 Minutes: The North Hollywood Shoot-Out", hit_count: 2, user_id: 4, created_at: "2022-12-06 20:33:12"},
  {id: 7, movie_title: "C'mon Man", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
  {id: 8, movie_title: "Jim Jefferies: Alcoholocaust", hit_count: 4, user_id: 8, created_at: "2022-07-05 16:49:03"},
  {id: 9, movie_title: "Grand Budapest Hotel, The", hit_count: 35, user_id: 9, created_at: "2022-01-10 08:22:27"},
  {id: 10, movie_title: "Ju-on: The Curse 2", hit_count: 64, user_id: 7, created_at: "2022-10-18 21:59:19"},
  {id: 11, movie_title: "Looney Tunes: Back in Action", hit_count: 17, user_id: 8, created_at: "2022-10-26 06:56:30"},
  {id: 12, movie_title: "Undertaker and His Pals, The", hit_count: 91, user_id: 6, created_at: "2022-02-22 11:23:11"},
  {id: 13, movie_title: "BlinkyTM", hit_count: 4, user_id: 5, created_at: "2022-01-08 21:02:09"},
  {id: 14, movie_title: "Alien Predator (Mutant II) (Falling, The)", hit_count: 47, user_id: 2, created_at: "2022-02-28 15:55:13"},
  {id: 15, movie_title: "Lorenzo's Oil", hit_count: 26, user_id: 6, created_at: "2022-01-21 02:46:27"},
  {id: 16, movie_title: "Beyond Re-Animator", hit_count: 88, user_id: 5, created_at: "2022-04-26 13:44:52"},
  {id: 17, movie_title: "Mississippi Burning", hit_count: 64, user_id: 8, created_at: "2022-11-14 05:23:58"},
  {id: 18, movie_title: "Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)", hit_count: 55, user_id: 1, created_at: "2022-03-24 06:27:21"},
  {id: 19, movie_title: "Power and Terror: Noam Chomsky in Our Times", hit_count: 85, user_id: 3, created_at: "2022-04-30 19:43:43"},
  {id: 20, movie_title: "Grumpy Cat's Worst Christmas Ever", hit_count: 58, user_id: 9, created_at: "2022-12-13 00:46:27"}
]

const users = [
  {id: 1,name: "Trix Hannaby", email: "thannaby2r@home.pl"},
  {id: 2,name: "Mead Lantiff", email: "mlantiff2q@imageshack.us"},
  {id: 3,name: "Margette Scaplehorn", email: "mscaplehorn2p@parallels.com"},
  {id: 4,name: "Kimmy Hulks", email: "khulks2o@google.de"},
  {id: 5,name: "Margot Haward", email: "mhaward2n@census.gov"},
  {id: 6,name: "Meredith Spendlove", email: "mspendlove2m@spiegel.de"},
  {id: 7,name: "Tuck Francis", email: "tfrancis2l@msn.com"},
  {id: 8,name: "Duke Davsley", email: "ddavsley2k@pinterest.com"},
  {id: 9,name: "Jimmy Weld", email: "jweld2j@tripadvisor.com"},
  {id: 10,name: "Kaylee Jakoubec", email: "kjakoubec2i@epa.gov"}
]



app.get("/", (req, res) => {
  res.send("안녕하세요 이효원입니다");
});

/// 로그인 api - req.body 데이터 작동 확인

app.post("/login", (req, res) => {
  //객체 구조분해할당으로 email, password 값을 지정해준다 앞으로 req보내면 그 값이 지정된 email, password로 들어와 채워질 것이다.

  const { email, password } = req.body;

  // 썬더클라이언트에서 해당값을 json 형식으로 넣어준다.
  // {"email" : "swew@naad.com" , "password": "1234" }을 넣었더니 그대로 나온다.
  console.log("email", email);
  console.log("password", password);

  res.send("/로그인 api");
});

// 회원가입 - 데이터 작동 확인

app.post("/enroll", (req, res) => {
  // 회원 가입이라서 id, password,name,phone을 설정해주었다. 이또한 객체 구조분해 할당을 사용하였다. 썬더클라이언트에서 바디로 해당 양식에 맞게 쓰면 데이터가 제대로 오는지 알 수 있을것이다.
  // {"id":"as2", "password":"7897", "name":"nayana", "phone":"000-111-1234"} 으로 값을 넣었을 때 그대로 값이 들어온 것을 확인했다.
  const { id, password, name, phone } = req.body;

  console.log("id", id);
  console.log("password", password);
  console.log("name", name);
  console.log("phone", phone);

  res.send("회원가입 성공! ");
});

//회원정보 가져오기- 정상작동

app.get("/userInfo", (req, res) => {
  /// 가설정된 users.js 폴더에 있는  파일을 가져왔다. userinfo 에 출력되는 것 확인했다. 1에서 20까지 찍힌다.
  res.json([...users].splice(0, 20));
});

// 게시물 하나만 가져오기 - DB 폴더에서 articles.js에서 0번째 게시물을 splice해서 범위를 정해줘서 가져왔다.  로컬호스트에서 정상 출력 확인.

app.get("/articles", (req, res) => {
  res.json([...artcies].splice(0, 1));
});

//선택 게시글 상세 정보 가져오기 -??? 실패

app.get("/showone", (req, res) => {
  const { id, title, contents } = req.body;

  ///여기서 if문을 하나 써야 상세정보를 가져올 거 같은데... ?

  console.log("id", id);
  console.log("title", title);
  console.log("contents", contents);
});

/// 게시물 작성  성공 - 데이터가 잘 들어와서 콘솔로그에 찍힌 게 이 데이터를 어딘가에 저장을 해주는 것이다.
// 가상의 디비로 사용하려고 만듦
const list = [];

app.post("/mpost", (req, res) => {
  //title, contents만 받아온다.- 정상작동

  const { title, contents } = req.body;
  const post = { title, contents };
  //객체구조분해할당 해서 데이터 잘 들어오는 것까진 확인
  console.log(post);
  //push로 list 배열에 바로 넣어준다.
  list.push(post);
  console.log("title", title);
  console.log("contents", contents);
  res.json(list);
});

/// 게시물 수정

//어 잠깐만 :postId의 값을 1로 바꾸니까 postId가 1로 바뀌네?.. 이게 patch 때문인가 원래 파람스 기능인가?

app.patch("/posts/patch/:postId", (req, res) => {
  const { postId } = req.params;
  const { contents, nickname, password } = req.body;

  console.log("PostId", postId);
  console.log("contents", contents);
  console.log("nickname", nickname);
  console.log("password", password);

  res.send("잘 수정했다.");
});

///게시물 삭제 - 등록된 글을 지워줘야 하니까 post number? 일련번호를 가져와서 지우면 되겠군

app.delete("/posts/delete/:postId", (req, res) => {
  /// 생각해보니까 내 블로그에도 게시물 다음에 /111 이런식으로 되어있던데 이걸 불러오면 되지 않을까 :postId로 소환할 수 있게끔 만들자
  const { postId } = req.params;
  const { id, title, nickname } = req.body;

  console.log("postId", postId);
  console.log("id", id);
  console.log("title", title);
  console.log("nickname", nickname);

  res.json("게시글이 삭제되었습니다.");
});

app.get("/get_mtitle" , (req,res)=> {
  res.send("영화관 제목 불러오기 ")
})



app.listen(3000, () => {
  console.log(port, "서버가 열렸습니다");
});
// 서버가 꺼지면 요청을 받을 수 없다. 특정 포트를 열고 기다려야한다 그것이 app.listen이다
//동작해야 요청을 받을 수 있다.
