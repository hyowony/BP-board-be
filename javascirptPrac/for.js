// 10000부터 1까지 찍기

for (let i = 10000; i >= 1; i--) {
  console.log(i);
}

// 짝수만 찍기

for (let i = 0; i < 10001; i++) {
  if (i % 2 === 0) console.log(i);
}

//1,3,5,7,9 방식으로 홀수 찍기

for (let i = 1; i <= 10000; i++) {
  if (i % 2 !== 0) console.log(i);
}

// 구구단 코드 이중포문 사용- 결괏값만 출력 수정 요망

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(j * i);
  }
}
/// 구구단 콘솔로그로 띄우기
for (let i = 1; i <= 9; i++) {
  console.log(i * 2);
  console.log(i * 3);
  console.log(i * 4);
  console.log(i * 5);
  console.log(i * 6);
  console.log(i * 7);
  console.log(i * 8);
  console.log(i * 9);
}
