///map 메소드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
///1. map

const array1 = [0, 1, 2, 5, 9];

const mapA = array1.map((i) => i + 2);

console.log(mapA);

/// map 기능연습 배열 연산자 변경

const array2 = [2, 5, 6, 7, 8];

const map1 = array2.map((a) => a * 2);

console.log(map1);

///filter 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

const words = ["효원", "준호", "동명", "순양", "아준", "스파코"];
const result = words.filter((word) => word.length > 1);
console.log(result);

const pracw = [
  "asdssd",
  "dfsdesdsd",
  "dsweweswewe",
  "erewdrew",
  "효원",
  "아자두우잠",
  "달",
  "숨마쿠라누데",
];
const show = pracw.filter((pracw) => pracw.length < 3);
console.log(show);

///find 메소드는 주어진 판별 함수를 만족하는 첫번째 요소의 값을 반환한다. 그런 요소가 없다면 undefined를 반환한다.

const prac1 = [1, 2, 3, 4, 50, 12, 95, 100, 8000, 4500];
const found = prac1.find((Element) => Element > 2);

console.log(found);

//json 문법 활용해서 배열에서 객체 찾기

const inven = [
  { name: "효원", age: 29 },
  { name: "철수", age: 26 },
  { name: "koefram", age: 56 },
  { name: "나카지마", age: 45 },
];
const sr = inven.find((human) => human.name === "효원");

console.log(sr);
