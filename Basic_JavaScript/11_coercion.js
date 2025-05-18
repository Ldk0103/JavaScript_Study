/**
 * 타입 변환
 * Type Conversion
 * 
 * 1. 명시적
 * 2. 암묵적
 */
let age = 20;

// 명시적으로 변화하려면.
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);
// ??.toString(); 함수를 사용하여 숫자 타입을 문자 타입으로 변환할 수 있다.

let test = age + '';
console.log(typeof test, test);
// 숫자에 문자열을 더하면 숫자 타입이 스트링 문자 타입으로 변환된다.

console.log(typeof test, test);

console.log('98' + 2); // 글자 + 숫자 2를 더하면 숫자 타입과 글자 타입을 서로 더하면 숫자 타입이 글자 타입으로 변환되기 때문에 그대로 "982"가 출력된다.
console.log('98' * 2); // string 타입에는 곱하기가 없기 때문에 196이 나옵니다.
console.log('98' - 2); // string 타입에는 뺄셈 또한 없기 때문에 96이 나옵니다. (실무에서는 사용하지 않지만 알아놓으면 좋습니다.)
console.log('92' + '2'); // 된다라는 기능 설명이지만 절대적으로 협업할때 서로 헷갈리지않게 사용하시면 안됩니다.

console.log('---------');
/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());

// 숫자 타입으로 변환하는 방법.
console.log(typeof parseInt('0'), parseInt('0')); // 정수로 변환 - parseInt
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log('---------');
/**
 * Boolean 타입으로 변환 -> String안에 값이 있으면 True이다.
 * 
 * 1. 아무 글자도 없는 String
 * 2. 값이 없는 경우
 * 3. 0
 * 
 * 모두 false가 반환된다.
 */

console.log(!'x'); // 값 앞에 !를 붙혀 Boolean 값으로 변환한다 !! = True / ! = False
console.log(!!'O');
console.log(!!''); // 만약 값이 없을시 false 값을 반환합니다.
console.log(!!0); // 0이라는 숫자를 넣을시 False 값을 반환합니다.
console.log(!!'0'); // string 안에 문자가 있으면 !! 개수에 따라서 True 와 False를 판단합니다.
console.log(!!undefined);
console.log(!!null);

console.log(!!{}); // 아무것도 없는 Key Value Object는 True가 반환된다. Object는 값이 있던 없던 무조건 True
console.log(!![]); // Array도 Object와 똑같이 값이 없어도 True가 나온다.