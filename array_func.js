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

// //가장 공부를 잘했던 "지영의 점수 확인" 연습

// //for문 사용 

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

const BeHM = scores.filter((score)=> {
  if(score.score < 40) {
    return true
  } else {
    return false
  }
})
console.log(BeHM)

//과제 2번 완성코드 

const goHomeMembers = scores.filter(score => score.score < 40)
console.log(goHomeMembers)
//1. 40점 이하인 사람들을 쪼개서 일단 한번 거른다.
 
const list = goHomeMembers.map((goHomeMembers) => goHomeMembers.name);

//2. 그 거른 값을 list라는 값을 만들고 거기다 다시 쪼개서 이름만? 배열한다.

console.log(list)

// const resultScores = scores.map((score) => score.name);
// for(let i = 0; i < goHomeMembers.length; i++)

// console.log(list)

