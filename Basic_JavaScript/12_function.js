/**
 * function -> 함수
 * 
 * 만약에 2라는 숫자에 * 10 / 2 % 3 string(문자)로 변환해서
 * 반환받고 싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 * 반복하지 말아라
 */
function calculate() {
    console.log((2 * 10 / 2 % 3).toString());
}

//calculate();

function calculate(number) { // number라는 파라미터를 괄호안에 저장
    console.log((number * 10 / 2 % 3).toString());
}

calculate(6);

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 * 
 * 실제 입력하는 값은 argument라고 한다. / number = Parameter / calculate = argument
 */

function multiply(x, y){ // 쉼표를 사용하여 여러개의 파라미터를 사용할 수 있다.
    console.log(x * y);
}

multiply(2, 4); 

function multiply(x, y = 10){
    console.log(x * y);
}

multiply(2, 4);
multiply(2);

console.log('--------');
/**
 * 반환받기
 * return 받기
 */
function multiply(x, y){
    return x * y;
}

const result1 = multiply(2, 4); // return을 사용하여 x * y의 값인 8이 result1에 반환되어 값이 저장되었다.
console.log(result1);

/**
 * Arrow 함수 
 */
const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(5, 4));

const multiply3 = (x, y) => x * y; // 간편하게 함수 body 없이도 Arrow 함수를 사용할 수 있다.
console.log(multiply3(4, 5));

const multiply4 = x => x * 2; // 파라미터가 한개면 괄호 없이도 함수가 적용된다.
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

const multiplyThree = function(x, y, z){
    console.log(arguments); // arguments는 함수 function에 저장된 값들을 배열로 위치된 곳을 알려준다.
    return x * y * z;
}

console.log(multiplyThree(4, 5, 6));

const multiplyAll = function(...argument){
    return Object.values(argument).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9,10));

//immediately invoked function 바로 실행되는 함수
(function(x, y){
    console.log(x * y);
})(4, 5)

console.log(typeof multiply);
console.log(multiply instanceof Object); // instanceof라는 키워드는 왼쪽타입이 오른쪽 타입과 같냐라는 것을 판단하는 키워드입니다.