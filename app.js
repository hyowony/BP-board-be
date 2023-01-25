const express = require("express")
const app = express()
const port = 3100
const cors = require("cors")

const cookieParser = require("cookie-parser")

// app.use(express.json())
// app.use(cookieParser())
app.use(cors())

const movies = [
  {id: 1, movie_title: "Misérables, Les", hit_count: 23, user_id: 1, created_at: "2022-08-11 00:40:32"},
  {id: 2, movie_title: "she's gone ", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
  {id: 3, movie_title: "Captain Ron", hit_count: 1, user_id: 1, created_at: "2022-08-14 18:09:47"},
  {id: 4, movie_title: "Siberia", hit_count: 37, user_id: 9, created_at: "2022-02-08 02:44:29"},
  {id: 5, movie_title: "Girl, The", hit_count: 82, user_id: 6, created_at: "2022-08-29 00:02:21"},
  {id: 6, movie_title: "44 Minutes: The North Hollywood Shoot-Out", hit_count: 2, user_id: 4, created_at: "2022-12-06 20:33:12"},
  {id: 7, movie_title: "C'mon Man", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
  {id: 8, movie_title: "Jim Jefferies: Alcoholocaust", hit_count: 4, user_id: 8, created_at: "2022-07-05 16:49:03"},
  {id: 9, movie_title: "Grand Budapest Hotel, The", hit_count: 35, user_id: 9, created_at: "2022-01-10 08:22:27"},
  {id: 10, movie_title: "Ju-on: The Curse 2", hit_count: 64, user_id: 7, created_at: "2022-10-18 21:59:19"},
  {id: 11, movie_title: "Looney Tunes: Back in Action", hit_count: 17, user_id: 8, created_at: "2022-10-26 06:56:30"},
  {id: 12, movie_title: "she's gone", hit_count: 91, user_id: 6, created_at: "2022-02-22 11:23:11"},
  {id: 13, movie_title: "BlinkyTM", hit_count: 4, user_id: 5, created_at: "2022-01-08 21:02:09"},
  {id: 14, movie_title: "Alien Predator (Mutant II) (Falling, The)", hit_count: 47, user_id: 2, created_at: "2022-02-28 15:55:13"},
  {id: 15, movie_title: "Lorenzo's Oil", hit_count: 26, user_id: 6, created_at: "2022-01-21 02:46:27"},
  {id: 16, movie_title: "Beyond Re-Animator", hit_count: 88, user_id: 5, created_at: "2022-04-26 13:44:52"},
  {id: 17, movie_title: "Mississippi Burning", hit_count: 64, user_id: 8, created_at: "2022-11-14 05:23:58"},
  {id: 18, movie_title: "Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)", hit_count: 55, user_id: 1, created_at: "2022-03-24 06:27:21"},
  {id: 19, movie_title: "Power and Terror: Noam Chomsky in Our Times", hit_count: 85, user_id: 3, created_at: "2022-04-30 19:43:43"},
  {id: 20, movie_title: "Grumpy Cat's Worst Christmas Ever", hit_count: 58, user_id: 9, created_at: "2022-12-13 00:46:27"},
  {id: 21, movie_title: "Misérables, Les", hit_count: 23, user_id: 1, created_at: "2022-08-11 00:40:32"},
  {id: 22, movie_title: "she's gone", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
  {id: 23, movie_title: "Captain Ron", hit_count: 1, user_id: 1, created_at: "2022-08-14 18:09:47"},
  {id: 24, movie_title: "Siberia", hit_count: 37, user_id: 9, created_at: "2022-02-08 02:44:29"},
  {id: 25, movie_title: "Girl, The", hit_count: 82, user_id: 6, created_at: "2022-08-29 00:02:21"},
  {id: 26, movie_title: "44 Minutes: The North Hollywood Shoot-Out", hit_count: 2, user_id: 4, created_at: "2022-12-06 20:33:12"},
  {id: 27, movie_title: "C'mon Man", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
  {id: 28, movie_title: "Jim Jefferies: Alcoholocaust", hit_count: 4, user_id: 8, created_at: "2022-07-05 16:49:03"},
  {id: 29, movie_title: "Grand Budapest Hotel, The", hit_count: 35, user_id: 9, created_at: "2022-01-10 08:22:27"},
  {id: 30, movie_title: "Ju-on: The Curse 2", hit_count: 64, user_id: 7, created_at: "2022-10-18 21:59:19"},
  {id: 31, movie_title: "Looney Tunes: Back in Action", hit_count: 17, user_id: 8, created_at: "2022-10-26 06:56:30"},
  {id: 32, movie_title: "she's gone", hit_count: 91, user_id: 6, created_at: "2022-02-22 11:23:11"},
  {id: 33, movie_title: "BlinkyTM", hit_count: 4, user_id: 5, created_at: "2022-01-08 21:02:09"},
  {id: 34, movie_title: "Alien Predator (Mutant II) (Falling, The)", hit_count: 47, user_id: 2, created_at: "2022-02-28 15:55:13"},
  {id: 35, movie_title: "Lorenzo's Oil", hit_count: 26, user_id: 6, created_at: "2022-01-21 02:46:27"},
  {id: 36, movie_title: "Beyond Re-Animator", hit_count: 88, user_id: 5, created_at: "2022-04-26 13:44:52"},
  {id: 37, movie_title: "Mississippi Burning", hit_count: 64, user_id: 8, created_at: "2022-11-14 05:23:58"},
  {id: 38, movie_title: "Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)", hit_count: 55, user_id: 1, created_at: "2022-03-24 06:27:21"},
  {id: 39, movie_title: "Power and Terror: Noam Chomsky in Our Times", hit_count: 85, user_id: 3, created_at: "2022-04-30 19:43:43"},
  {id: 40, movie_title: "Grumpy Cat's Worst Christmas Ever", hit_count: 58, user_id: 9, created_at: "2022-12-13 00:46:27"},
  {id: 41, movie_title: "Misérables, Les", hit_count: 23, user_id: 1, created_at: "2022-08-11 00:40:32"},
  {id: 42, movie_title: "C'mon Man", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
  {id: 43, movie_title: "Captain Ron", hit_count: 1, user_id: 1, created_at: "2022-08-14 18:09:47"},
  {id: 44, movie_title: "Siberia", hit_count: 37, user_id: 9, created_at: "2022-02-08 02:44:29"},
  {id: 45, movie_title: "Girl, The", hit_count: 82, user_id: 6, created_at: "2022-08-29 00:02:21"},
  {id: 46, movie_title: "44 Minutes: The North Hollywood Shoot-Out", hit_count: 2, user_id: 4, created_at: "2022-12-06 20:33:12"},
  {id: 47, movie_title: "C'mon Man", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
  {id: 48, movie_title: "Jim Jefferies: Alcoholocaust", hit_count: 4, user_id: 8, created_at: "2022-07-05 16:49:03"},
  {id: 49, movie_title: "Grand Budapest Hotel, The", hit_count: 35, user_id: 9, created_at: "2022-01-10 08:22:27"},
  {id: 50, movie_title: "Ju-on: The Curse 2", hit_count: 64, user_id: 7, created_at: "2022-10-18 21:59:19"},
  {id: 51, movie_title: "Looney Tunes: Back in Action", hit_count: 17, user_id: 8, created_at: "2022-10-26 06:56:30"},
  {id: 52, movie_title: "Undertaker and His Pals, The", hit_count: 91, user_id: 6, created_at: "2022-02-22 11:23:11"},
  {id: 53, movie_title: "BlinkyTM", hit_count: 4, user_id: 5, created_at: "2022-01-08 21:02:09"},
  {id: 54, movie_title: "Alien Predator (Mutant II) (Falling, The)", hit_count: 47, user_id: 2, created_at: "2022-02-28 15:55:13"},
  {id: 55, movie_title: "Lorenzo's Oil", hit_count: 26, user_id: 6, created_at: "2022-01-21 02:46:27"},
  {id: 56, movie_title: "Beyond Re-Animator", hit_count: 88, user_id: 5, created_at: "2022-04-26 13:44:52"},
  {id: 57, movie_title: "Mississippi Burning", hit_count: 64, user_id: 8, created_at: "2022-11-14 05:23:58"},
  {id: 58, movie_title: "Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)", hit_count: 55, user_id: 1, created_at: "2022-03-24 06:27:21"},
  {id: 59, movie_title: "Power and Terror: Noam Chomsky in Our Times", hit_count: 85, user_id: 3, created_at: "2022-04-30 19:43:43"},
  {id: 60, movie_title: "Grumpy Cat's Worst Christmas Ever", hit_count: 58, user_id: 9, created_at: "2022-12-13 00:46:27"},
  {id: 61, movie_title: "Misérables, Les", hit_count: 23, user_id: 1, created_at: "2022-08-11 00:40:32"},
  {id: 62, movie_title: "C'mon Man", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
  {id: 63, movie_title: "Captain Ron", hit_count: 1, user_id: 1, created_at: "2022-08-14 18:09:47"},
  {id: 64, movie_title: "Siberia", hit_count: 37, user_id: 9, created_at: "2022-02-08 02:44:29"},
  {id: 65, movie_title: "Girl, The", hit_count: 82, user_id: 6, created_at: "2022-08-29 00:02:21"},
  {id: 66, movie_title: "44 Minutes: The North Hollywood Shoot-Out", hit_count: 2, user_id: 4, created_at: "2022-12-06 20:33:12"},
  {id: 67, movie_title: "C'mon Man", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
  {id: 68, movie_title: "Jim Jefferies: Alcoholocaust", hit_count: 4, user_id: 8, created_at: "2022-07-05 16:49:03"},
  {id: 69, movie_title: "Grand Budapest Hotel, The", hit_count: 35, user_id: 9, created_at: "2022-01-10 08:22:27"},
  {id: 70, movie_title: "Ju-on: The Curse 2", hit_count: 64, user_id: 7, created_at: "2022-10-18 21:59:19"},
  {id: 71, movie_title: "Looney Tunes: Back in Action", hit_count: 17, user_id: 8, created_at: "2022-10-26 06:56:30"},
  {id: 72, movie_title: "Undertaker and His Pals, The", hit_count: 91, user_id: 6, created_at: "2022-02-22 11:23:11"},
  {id: 73, movie_title: "BlinkyTM", hit_count: 4, user_id: 5, created_at: "2022-01-08 21:02:09"},
  {id: 74, movie_title: "Alien Predator (Mutant II) (Falling, The)", hit_count: 47, user_id: 2, created_at: "2022-02-28 15:55:13"},
  {id: 75, movie_title: "Lorenzo's Oil", hit_count: 26, user_id: 6, created_at: "2022-01-21 02:46:27"},
  {id: 76, movie_title: "Beyond Re-Animator", hit_count: 88, user_id: 5, created_at: "2022-04-26 13:44:52"},
  {id: 77, movie_title: "Mississippi Burning", hit_count: 64, user_id: 8, created_at: "2022-11-14 05:23:58"},
  {id: 78, movie_title: "Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)", hit_count: 55, user_id: 1, created_at: "2022-03-24 06:27:21"},
  {id: 79, movie_title: "Power and Terror: Noam Chomsky in Our Times", hit_count: 85, user_id: 3, created_at: "2022-04-30 19:43:43"},
  {id: 80, movie_title: "Grumpy Cat's Worst Christmas Ever", hit_count: 58, user_id: 9, created_at: "2022-12-13 00:46:27"},
  {id: 81, movie_title: "Misérables, Les", hit_count: 23, user_id: 1, created_at: "2022-08-11 00:40:32"},
  {id: 82, movie_title: "C'mon Man", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
  {id: 83, movie_title: "Captain Ron", hit_count: 1, user_id: 1, created_at: "2022-08-14 18:09:47"},
  {id: 84, movie_title: "Siberia", hit_count: 37, user_id: 9, created_at: "2022-02-08 02:44:29"},
  {id: 85, movie_title: "Girl, The", hit_count: 82, user_id: 6, created_at: "2022-08-29 00:02:21"},
  {id: 86, movie_title: "44 Minutes: The North Hollywood Shoot-Out", hit_count: 2, user_id: 4, created_at: "2022-12-06 20:33:12"},
  {id: 87, movie_title: "C'mon Man", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
  {id: 88, movie_title: "Jim Jefferies: Alcoholocaust", hit_count: 4, user_id: 8, created_at: "2022-07-05 16:49:03"},
  {id: 89, movie_title: "Grand Budapest Hotel, The", hit_count: 35, user_id: 9, created_at: "2022-01-10 08:22:27"},
  {id: 90, movie_title: "Ju-on: The Curse 2", hit_count: 64, user_id: 7, created_at: "2022-10-18 21:59:19"},
  {id: 91, movie_title: "Looney Tunes: Back in Action", hit_count: 17, user_id: 8, created_at: "2022-10-26 06:56:30"},
  {id: 92, movie_title: "Undertaker and His Pals, The", hit_count: 91, user_id: 6, created_at: "2022-02-22 11:23:11"},
  {id: 93, movie_title: "BlinkyTM", hit_count: 4, user_id: 5, created_at: "2022-01-08 21:02:09"},
  {id: 94, movie_title: "Alien Predator (Mutant II) (Falling, The)", hit_count: 47, user_id: 2, created_at: "2022-02-28 15:55:13"},
  {id: 95, movie_title: "Lorenzo's Oil", hit_count: 26, user_id: 6, created_at: "2022-01-21 02:46:27"},
  {id: 96, movie_title: "Beyond Re-Animator", hit_count: 88, user_id: 5, created_at: "2022-04-26 13:44:52"},
  {id: 97, movie_title: "Mississippi Burning", hit_count: 64, user_id: 8, created_at: "2022-11-14 05:23:58"},
  {id: 98, movie_title: "Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)", hit_count: 55, user_id: 1, created_at: "2022-03-24 06:27:21"},
  {id: 99, movie_title: "Power and Terror: Noam Chomsky in Our Times", hit_count: 85, user_id: 3, created_at: "2022-04-30 19:43:43"},
  {id: 100, movie_title: "Grumpy Cat's Worst Christmas Ever", hit_count: 58, user_id: 9, created_at: "2022-12-13 00:46:27"},
  {id: 101, movie_title: "Misérables, Les", hit_count: 23, user_id: 1, created_at: "2022-08-11 00:40:32"},
  {id: 102, movie_title: "she's gone ", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
  {id: 103, movie_title: "Captain Ron", hit_count: 1, user_id: 1, created_at: "2022-08-14 18:09:47"},
  {id: 104, movie_title: "Siberia", hit_count: 37, user_id: 9, created_at: "2022-02-08 02:44:29"},
  {id: 105, movie_title: "Girl, The", hit_count: 82, user_id: 6, created_at: "2022-08-29 00:02:21"},
  {id: 106, movie_title: "44 Minutes: The North Hollywood Shoot-Out", hit_count: 2, user_id: 4, created_at: "2022-12-06 20:33:12"},
  {id: 107, movie_title: "C'mon Man", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
  {id: 108, movie_title: "Jim Jefferies: Alcoholocaust", hit_count: 4, user_id: 8, created_at: "2022-07-05 16:49:03"},
  {id: 109, movie_title: "Grand Budapest Hotel, The", hit_count: 35, user_id: 9, created_at: "2022-01-10 08:22:27"},
  {id: 110, movie_title: "Ju-on: The Curse 2", hit_count: 64, user_id: 7, created_at: "2022-10-18 21:59:19"},
  {id: 111, movie_title: "Looney Tunes: Back in Action", hit_count: 17, user_id: 8, created_at: "2022-10-26 06:56:30"},
  {id: 112, movie_title: "she's gone", hit_count: 91, user_id: 6, created_at: "2022-02-22 11:23:11"},
  {id: 113, movie_title: "BlinkyTM", hit_count: 4, user_id: 5, created_at: "2022-01-08 21:02:09"},
  {id: 114, movie_title: "Alien Predator (Mutant II) (Falling, The)", hit_count: 47, user_id: 2, created_at: "2022-02-28 15:55:13"},
  {id: 115, movie_title: "Lorenzo's Oil", hit_count: 26, user_id: 6, created_at: "2022-01-21 02:46:27"},
  {id: 116, movie_title: "Beyond Re-Animator", hit_count: 88, user_id: 5, created_at: "2022-04-26 13:44:52"},
  {id: 117, movie_title: "Mississippi Burning", hit_count: 64, user_id: 8, created_at: "2022-11-14 05:23:58"},
  {id: 118, movie_title: "Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)", hit_count: 55, user_id: 1, created_at: "2022-03-24 06:27:21"},
  {id: 119, movie_title: "Power and Terror: Noam Chomsky in Our Times", hit_count: 85, user_id: 3, created_at: "2022-04-30 19:43:43"},
  {id: 120, movie_title: "Grumpy Cat's Worst Christmas Ever", hit_count: 58, user_id: 9, created_at: "2022-12-13 00:46:27"},
  {id: 121, movie_title: "test", hit_count: 58, user_id: 9, created_at: "2022-12-13 00:46:27"},
]
// 연습용 더미데이터 +80개 추가 
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

app.use(express.json())
app.use(cookieParser())


// 1. 영화 전체 목록을 순회한다.
// 2. 순회 하면서 영화 제목 작성자 (user_id) 에 해당하는 user를 users 에서 검색한다
// 3. 2번에 일치하는 user 의 name 만 가져온다
// 4. 가져온 name을 순회중 movie 의 name property 에 추가한다.


app.get('/movies', (req, res) => {
 
const page = req.query.page || 1
console.log(page)
const cloneMovies = [...movies] 
const dividepage = Math.ceil(movies.length / 10)
const startIndex = (page - 1) * 10
const paginationMovies = cloneMovies.splice(startIndex,10)

// console.log("startindex:",startIndex)
// console.log("lastPage:",dividepage)
  
// const pagenationMovies = movies.splice(0,10,[])

  const sortlist = paginationMovies.map(movie => ({
    ...movie,
    //1. 영화 전체 목록을 순회한다. 
    name: users.find(user => user.id === movie.user_id).name
    // 2. 순회하면서  영화 제목 작성자에 user_id에 해당하는 user를 users에서 검색한다. 
    // 3  2번에 일치하는 user의 name만 가져온다. 
    // 4.  가져온 name을 순회중인 movies의 name property에 추가한다. 
  }))
//내림차순으로 정렬한다. 정렬할 때 sort를 쓴다. 
  sortlist.sort ((a,b) => {
    const preTs = new Date(a.created_at).getTime()
    const curTs = new Date(b.created_at).getTime()

    // console.log(preTs, "/", curTs)

    return curTs - preTs
  });
// const Lpage = movies.length / 10
// const dividepage = Math.ceil(movies.length / 10)
// const startIndex = (page-1) * 10

// console.log("startindex:",startIndex)
// console.log("lastPage:",dividepage)

// console.log("마지막페이지:", Lpage)
  //res.send는 가장 마지막에 쓴다. 결괏값을 제출하는 것이기 때문에 이것을 앞 줄에 실행해버리면 그 다음 명령은 읽지 못한다.  
  // res.send(sortlist)
res.send({
  pageInfo : {
    dividepage
  },
  movies: paginationMovies,
  movies : sortlist


})


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
  
  movies.unshift(enrollMovie)
  // 5. 배열에 넣을때는 push를 이용한다. 결국 movies 배열에 우리가 설정한 newMovies를 넣어주는 작업인것이다.
  // 게시판에서 내가 쓴 글이 가장 상단에 노출되게 하고 싶다면 unshift를 쓰면 된다. 
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

  // console.log(movies)

  ///5. hit_count 1을 더한 객체를 반환한다. 

  res.send(getobj)

  // console.log(movieindex)

  // app.get("/", (req,res)=> {
    
  // })

  

}) 


app.listen(port, () => {
  console.log(port, "서버 연결완료 ")
})