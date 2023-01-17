//지정된 데이터 값 

const scores = [
  { name: '지영', score: 80, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
  { name: '효원', score: 50, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
  { name: '정기', score: 60, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
  { name: '대신', score: 30, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
  { name: '택환', score: 94, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
  { name: '호승', score: 30, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
  { name: '희선', score: 23, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
  { name: '설인', score: 56, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
]
// 과제 1 혼자 연습하기 

// 위 배열에서 40점 미만 점수 받은 사람 구하기 연습 -for문

// const 빠따 = [] 

// for (let i = 0; i< scores.length; i++) {
//   if(scores[i].score < 40) {
//     ///반복분 구문 정의 된 배열 i에서 스코어 점수가 40점 이하인 것을 찾는다. 
//     빠따.push(scores[i].name)
//     // 위 조건대로 찾아서 빠따 배열에 이 값들만 넣어준다. 
//   }
  
// }
// /// 대신, 호승, 지선이 출력된다 
// console.log(빠따)

// //위 배열에서 40점 미만 점수 받은 자 구하기 - 필터 사용

// const 줘팬다 = scores.filter(score => score.score < 40)
// /// 이게 왜 다 나오지?? 필터가 해당 조건만 맞으면 다 같이 긁어오는 거엿던가? 
// console.log(줘팬다)

//가장 공부를 잘했던 "지영의 점수 확인" 연습

//for문 사용 

// let jyscore = null 

// for(let i = 0; i < scores.length; i++) {
//   if (scores[i].name === '지영') {
//     jyscore = scores[i].score
//   }
// }
// console.log("지영점수:", jyscore)

// // find 함수 사용 지영점수 찾기 연습 

// const jySellectscore = scores.find(score => score.name === '지영')

// console.log(jySellectscore)

// // 문제 보정 +5점 for문 사용 

// const 보정scores = [] 
// for (let i = 0; i < scores.length; i++) {
//   const newscore = scores[i].score + 5
//   보정scores.push({
//     ...scores[i] ,
//     scores: newscore
//   })
// }
// console.log("보정점수", 보정scores)

// ///map 사용 연습 map은 리스트를 쭉 돌려주는 것. 하나하나 뽑아서 함수 실행
// console.log(scores)

// const modiscore = scores.map(score => ({
//   ...score,

//   score : score.score + 5
//   //왜 score가 NAN으로 뜨지?  scores -> score 오타다... 휴먼에러
// }))

// // console.log(scores.score)

// console.log( "보정점수:", modiscore)

// 과제 2 - 배열에서 40점 미만 점수 받은 사람 구하기 
// filter를 써서 이름으로만 이루어진 배열로 반환하도록 수정.

// const BeHM = scores.filter((score)=> {
//   if(score.score < 40) {
//     return true
//   } else {
//     return false
//   }
// })
// console.log(BeHM)

// //과제 2번 완성코드 

// const goHomeMembers = scores.filter(score => score.score < 40)
// console.log(goHomeMembers)
// //1. 40점 이하인 사람들을 쪼개서 일단 한번 거른다.제대로 걸러졌는지 확인 완료
 
// const list = goHomeMembers.map((goHomeMembers) => goHomeMembers.name);

// //2. 그 거른 값을 list라는 값을 만들고 거기다 다시 쪼개서 이름만? 배열한다.

// console.log(list)

// const resultScores = scores.map((score) => score.name);
// for(let i = 0; i < goHomeMembers.length; i++)

// console.log(list)

//과제 3번 완성 코드 
// 1. find해서 지영의 이름을 찾는다 2. 베스트 플레이어의 점수만을 보고 싶다면 객체 안에 접속해서 score을 찍어준다. 
// * find는 배열을 반환해주는 것이 아니라 배열의 요소를 반환해준다. MDN < 사이트 참고. 

const bestplayer = scores.find(score=> score.name === "지영")
// 1. 지영이라는 이름을 찾아서 베스트 플레이어라는 값에 담아준다.
console.log(bestplayer)
//2. 값을 제대로 찾아서 담아왔다
console.log("detailscore:", bestplayer.score)
//3. 이제 상세 점수라는 코멘트를 달아주고 찾은 베스트 플레이어의 점수만 콕 찝어서 들어간다. 

// const ds = bestplayer.map((bestplayer) => bestplayer.score);

// console.log(ds)

//과제 4번 데이터 

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

/// 4-1 모든 movies를 반환하는 개발, 단 movies를 작성한 user의 이름을 포함

const movieUser = movies.map(movies => (
  {...movie,
  name : users.find(user => user.id === movie.user_id).name,
}
));
console.log(movieUser)
