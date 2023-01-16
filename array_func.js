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

// 위 배열에서 40점 미만 점수 받은 사람 구하기 -for문
const 빠따 = [] 

for (let i = 0; i< scores.length; i++) {
  if(scores[i].score < 40) {
    ///반복분 구문 정의 된 배열 i에서 스코어 점수가 40점 이하인 것을 찾는다. 
    빠따.push(scores[i].name)
    // 위 조건대로 찾아서 빠따 배열에 이 값들만 넣어준다. 
  }
  
}
/// 대신, 호승, 지선이 출력된다 
console.log(빠따)

//위 배열에서 40점 미만 점수 받은 자 구하기 - 필터사용

const 줘팬다 = scores.filter(score => score.score < 40)
/// 이게 왜 다 나오지? 
console.log(줘팬다)