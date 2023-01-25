///부가세 함수 익숙해지기 과제

//과제 요구사항 확인 

// 위의 부가세 가져오는 프로그램 함수로 바꾸기!



const price = 10000 // 소비자가격
const priceKrw = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(price) + "원"
let tax = price / 11 * 10
tax = Math.round(tax)
tax = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(tax)
tax = tax + "원"
let originalPrice = price / 11
originalPrice =  Math.round(originalPrice)
originalPrice = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(originalPrice)
originalPrice = originalPrice + "원"

console.log(price)

console.log(priceKrw)

console.log(tax)

console.log(originalPrice)