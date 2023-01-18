const express = require("express")
const app = express()
const port = 3100

const cookieParser = require("cookie-parser")

app.use(express.json())
app.use(cookieParser())

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




// 1. 영화 전체 목록을 순회한다.
// 2. 순회 하면서 영화 제목 작성자 (user_id) 에 해당하는 user를 users 에서 검색한다
// 3. 2번에 일치하는 user 의 name 만 가져온다
// 4. 가져온 name을 순회중 movie 의 name property 에 추가한다.


app.get('/movies', (req, res) => {
  res.send(movies.map(movie => ({
    ...movie,
    //1. 영화 전체 목록을 순회한다. 
    name: users.find(user => user.id === movie.user_id).name
    // 2. 순회하면서  영화 제목 작성자에 user_id에 해당하는 user를 users에서 검색한다. 
    // 3  2번에 일치하는 user의 name만 가져온다. 
    // 4.  가져온 name을 순회중인 movies의 name property에 추가한다. 
  })))
})

// 1. 사용자가 등록할 영화의 정보를 주면 받아온다 from 요청 (req)
// 2. 가져온 영화정보에 id 를 부여한다.
// 3. 조회수 (hit_count) 는 기본으로 0으로 설정한다.
// 4. 작성일은 현재 시각을 넣는다.
// 5. 2,3,4 전부 부여된 영화정보를 movies 추가한다


app.post('/movies', (req, res) => {


  const enrollMovie = req.body
  //1. 사용자가 등록할 영화의 정보를 주면 받아온다. 
  enrollMovie.id = movies[movies.length - 1].id + 1
  //2. 가져온 영화정보에 id를 부여한다. 
  enrollMovie.hit_count = 0
  // 3. 조회수는 기본값으로 0을 부여한다. 
  enrollMovie.created_at = new Date().toISOString()
  //4. 작성일은 현재 시각을 넣는다 new DATE(). toIsoString을 이용한다..  
  
  movies.push(enrollMovie)
  // 5. 배열에 넣을때는 push를 이용한다. 결국 movies 배열에 우리가 설정한 newMovies를 넣어주는 작업인것이다.
  console.log(enrollMovie)
  res.send(enrollMovie)
  //res.send(newMovie)는 적어줘야지 조회수가 올라간다. 
})

//과제 

// 1. 사용자가 보내준 id 를 가져온다
// 2. id 에 해당하는 movie 를 가져온다
// 3. 가져온 movie 에서 hit_count 1을 더한 객체를 만든다
// 4. hit_count 1을 더한 객체를 movies 내에서 기존 객체에 치환한다. (findIndex, splice 사용)
// 5. hit_count 1을 더한 객체를 반환한다.

app.get("/movies/:id", (req,res)=> {
  

  const id = req.params.id
  // 1. 사용자가 보내준 id를 가져온다. 
  console.log(id)
// 2. id에 해당하는 movies를 가져온다. 
  const getobj =  movies.find(movie => {return movie.id ===   Number(id) })
  // 파람스를 통해 지정해준 숫자를 가져오는 구문 
  //NUM는 형 변환을 시킨 것이다. params로 가져오는 데이터 값은 string인데 num을 써서 int로 바꿔준것이다. 
  // console.log(getobj)

  //3. 가져온 movies에서 hit_count 1을 더한 객체를 만든다

  getobj.hit_count = getobj.hit_count +1

  // console.log(getobj)

  //4. 히트카운트 1을 더한 객체를 무비스 내에서 기존 객체에 치환한다. 

  const movieindex = movies.findIndex(movie => movie.id === Number(id))

  movies.splice(movieindex,1,getobj)
  /// 배열. splice(작업 위치, 위치로부터 몇 칸 이동했냐, 끼워넣을 것 )
  // 무비스에서 무비인덱스에서 작업하고 위치로부터 1칸이고 getobj로 새로 교체해라 

  console.log(movies)

  ///5. hit_count 1을 더한 객체를 반환한다. 

  res.send(getobj)

  // console.log(movieindex)

  

}) 


app.listen(port, () => {
  console.log("서버 연결완료 ")
})