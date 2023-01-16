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
} else if (age > 31) {
  console.log("아냐 나이 더 많아");
} else {
  age === 35;
  console.log("만 나이로 동갑입니다");
}

/// 페이를 19999원이라 설정하였다. 그럼 어디 조건에 걸리게 될까?
const pay = 19999;

//// 페이가 삼만원이라면 콘솔로그로 현재 너의 월급을 출력하게 될 것이다. 어디보자 페이가 19999원이니까 이건 건너뛰자.
if (pay === 30000) {
  console.log("현재 너의 월급");
  /// 페이가 오만원보다 같거나 많으면 희망 월급을 출력하게 될것이다. 음.. 19999원이니 이것도 안 된다 pass~
} else if (pay >= 50000) {
  console.log("희망월급");
  //// 페이가 2만원 미만이라는 조건을 달아놨으므로 19999원? 2만원 이하네? 그러면 그 직장 때려쳐라는 문구를 출력하게 된다.
} else {
  pay < 20000;
  console.log("그 직장 때려쳐");
}
//그래서 결괏값의로 "그 직장 때려쳐가 출력되게 되는 것이다. "
