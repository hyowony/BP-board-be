const express = require("express")
const app = express()
const port = 3100
const cors = require("cors")

const cookieParser = require("cookie-parser")

// app.use(express.json())
// app.use(cookieParser())
app.use(cors())

const movies = require("./src/models/movies")
const users = require("./src/models/users")

// 연습용 더미데이터 +80개 추가 


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
  movies: paginationMovies
  ,movies : sortlist


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