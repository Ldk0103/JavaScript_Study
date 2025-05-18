/**
 * Operators
 * 
 * 연산자
 * 
 * 산술 연산자
 * 
 * 1. 덧셈
 * 2. 뺄셈
 * 3. 곱셈
 * 4. 나눗셈
 * 5. 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log('----------');

console.log(10 * (10 + 10));
console.log('----------');
/**
 * 증가와 감소
 */
let number = 1;

number ++;
console.log(number);

number --;
console.log(number);
/**
 * 연산자의 위치
 * 
 * 후위 증가와 선위 증가
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result, number); 
// result 값은 1로 저장되있는 상태에서 출력 후 number의 값은 result의 값인 1이 저장되어 증가가외서 1 2이란 결과가 출력된다.

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게될까?
 * */
let sample = '99';

console.log(+sample);
console.log(typeof +sample); 
// 계산하는 문장에서 +를 사용할때만 숫자 타입으로 변환된다.

sample = true;
console.log(+sample);
console.log(typeof +sample); 
// true라는 값을 +를 사용하여 숫자로 변환하였을때 1이라는 값으로 출력된다. (반대로 false는 0)

sample = '이동규';
// NaN -> Not a Number 숫자가 아니라는 뜻
console.log(+sample);

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);
// number = 100+10인 값을 number에 할당하여 결과를 내보낸다.

/**
 * 비교 연산자 
 * 
 * 1. 값의 비교
 * 2. 값과 타입의 비교
 */
console.log(5 == 5); //값의 비교 문자열로 써도 숫자로 인식. 
console.log(5 == '5'); 
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);

console.log( 5 === 5); // =을 3개를 사용시 값과 타입을 비교한다.
console.log( 5 === '5');

console.log( 5 != 5);
console.log( 5 != '10'); // !=은 같지 않다라는 뜻

console.log( 5 !== '5'); // !==일시 값과 타입을 비교한다.

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1); // < > <= >= 가 있다.
console.log('-----------');

/**
 * 삼항 조건 연산자 (ternary operator)
 * 
 * ?를 기준으로 조건을 넣게되며 왼쪽은 True 오른쪽는 False의 값이 출력된다.
 */
console.log(10 > 0 ? '10이 0보다 크다.':'10이 0보다 작다.');
console.log('-----------');

/**
 * 논리 연산자 
 * 
 * 1. &&(and) : 모두 true여야 true를 반환한다.
 * 2. ||(or) : 하나만 true여도 true를 반환한다.
 */
console.log(true && true);
console.log(true && false);
console.log('-----------');
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log('-----------');

console.log(10 < 1 && 20 < 2); // 활용예시

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 falst면 좌측 값 반환
 */

console.log(true && '이동규');
console.log(false && '이동규');
console.log(true || '이동규');
console.log(false || '이동규');
console.log('-----------');

/**
 * 지수 연산자.
 * 흔히 말하는 제곱.
 */
console.log(2 ** 2);
console.log(124125 ** 3);
console.log('-----------');

/**
 * null 연산자.
 */
let name;
console.log(name);

name = name ?? '코드공부'; // name이 undifined일 시 ??의 오른쪽 값을 저장한다.
console.log(name);

let name2;

name2 ??= '이동규';
console.log(name2);
console.log('-----------');