// 1.레포지트리 폴더를 생성
// 2. 파일 생성
// 3. 모델. 무비스 리콰이어 
// 4.함수 껍데기 생성
// 5. 함수 내보내기
// 6. app.js에서 5번의 내보내진 함수 가져오기
// 7.함수 호출하기
// 8. app.js 
const movies = require("../models/movies")
// 임시 데이터가 모델스/무비스에 있으니까 가져오는 것이다. 
const users = require("../models/users")
function getM(page) {

  const cloneMovies = [...movies] 
  const dividepage = Math.ceil(movies.length / 10)
  const startIndex = (page - 1) * 10
  const paginationMovies = cloneMovies.splice(startIndex,10)
  
  const sortlist = paginationMovies.map(movie => ({
      ...movie,
      //1. 영화 전체 목록을 순회한다. 
      name: users.find(user => user.id === movie.user_id).name
      // 2. 순회하면서  영화 제목 작성자에 user_id에 해당하는 user를 users에서 검색한다. 
      // 3  2번에 일치하는 user의 name만 가져온다. 
      // 4.  가져온 name을 순회중인 movies의 name property에 추가한다. 
    }))
  
  
    return {
    dividepage : dividepage ,

    movies:sortlist.sort ((a,b) => {
      const preTs = new Date(a.created_at).getTime()
      const curTs = new Date(b.created_at).getTime()
      return curTs - preTs
    
    }),
  
  }
}

function getMovieById(id) {
  // selectedMovies=  movies.find(movie => movie.id === Number(id))
  return movies.find(movie => movie.id === Number(id))
//갖고 와서 조회수를 하나씩 올려주고 있다. 이러면 함수가 두 가지 일을 하는 것이니 좋지는 않다. 심미적인 코드를 만드려면 하나의 함수 = 하나의 기능만 담당하는게 좋다. 
  // const movieTorReplace = {
  //   ...selectedMovies,
  //   hit_count : selectedMovies.hit_count +1
  // }

  // const targetIndex = movies.findIndex(movie => movie.id === Number(id))
  // return movies.splice(targetIndex,1, movieTorReplace)

}
function increaseHitCount(movies) {
  const movieTorReplace = {
    ...Movies,
    hit_count : selectedMovies.hit_count +1
  }
  const targetIndex = movies.findIndex(movie => movie.id === Number(id))
  return movies.splice(targetIndex,1, movieTorReplace)

}

module.exports = 
{ getM : getM,
  getMovieById: getMovieById,
  increaseHitCount: increaseHitCount

}
//getM, getmid, 조회수 증가 함수를 내보내주고 있다. 
//함수를 여러개로 내보내고 싶을 때는 오브젝트로 만든다. 
//하나의 함수는 하나의 역할만 담당하는게 좋다. 


