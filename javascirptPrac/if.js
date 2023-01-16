//IF, else문 연습

//if는 조건문이라고 하기도 한다.

const shoesPrice = 40000;

if (shoesPrice < 50000) {
  console.log("신발을 사겠습니다.");
}

const CapPrice = 50000;
if (CapPrice <= 50000) {
  console.log("모자를 사지 않겠습니다.");
}

const age = 35;

if (age < 30) {
  console.log("효원이보다 어리네?");
  // } else if (age > 31) {
  //   console.log("아냐 나이 더 많아");
} else if (age === 35) {
  console.log("만 나이로 동갑입니다");
}

//연봉을 나눌 때 작은 거부터 나누는 게 쉽다.  ||= or . $$ = and

const pay = 70000;
// 일당을 70000으로 설정해보자. 어떤 값이 나올까?

if (pay < 20000) {
  console.log("때려쳐");
  /// pay가 20000보다 작으면 때려쳐를 출력하게 될 것이다.
} else if (pay >= 30000 && pay <= 65000) {
  //위 if문을 통과하지 못할때 else if문이 작동하게 될 것이다. "30000보다 크거나 같을 때 그리고 65000원 보다 작거나 같을때"의 조건을 통과하면 현재 수당으로 걸러지게 될 것이다.
  console.log("현재 수당");
} else {
  ///else는 저 if나 else if구문을 통과하지 못하면 나머지로 실행하겠다 하는 의미 그럼 65001원부터는 꿈의 수당인 셈이다. 그러므로 70000원은 꿈의 수당이다(?)
  console.log("꿈의 수당");
}
