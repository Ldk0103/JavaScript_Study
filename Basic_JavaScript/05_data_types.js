/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * 1. Number (숫자)
 * 2. String (문자열)
 * 3. Boolean (불리언 / 참과 거짓)
 * 4. undefined (언디파인드 / 정의가 되지않은 값)
 * 5. null (널)
 * 6. Symbol (심볼)
 * 
 * 7. Object (객체)
 *    Function
 *    Array
 *    Object
 */

/**
 * Number Type
 */
const age = 20;
const tempature = -12;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('----------');

const infinity = Infinity;

console.log(typeof infinity);
console.log('----------');

/**
 * String Type
 */
const ldg = '이동규';
console.log(typeof ldg);

const dong = "'20살'이동규";
console.log(dong);

console.log(dong + '개발자');
console.log(`${dong} 개발자`); // `${---}`안에 들어가는 것은 "변수명에 저장된 값"을 그대로 가져와 넣을수 있다.
console.log('----------');

/**
 * Boolean Type
 */
const isTrue = true;
const isFalse = false; 
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('----------');
/**
 * Undefined 
 * 
 * 사용자가 직접 값을 초기화하지 않았을때
 * 기본적으로 지정되는 값.
 * 
 * 직접 undefined로 값을 초기화하는건 절대하면안된다.
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log('----------');
/**
 * null Type
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이지만 Js에서는 개발자가
 * 명시적으로 없는 값을 초기화할때 사용된다.
 */
let init = null;
console.log(init);
console.log(typeof init); 
console.log('----------');
/**
 * Symbol Type
 * 
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 
 * 호출해서 사용한다.
 */
let test1 = '1';
let test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2); // <-- Symbol 타입은 유일무이한 값을 가지기 때문에 값이 똑같아도 False 결과가 나옴
console.log('----------');
/**
 * Object Type
 * 
 * Map
 * 키 : 벨류의 쌍으로 이루어져있다.
 * key:value
 */
const color = {
    red:'빨간색',
    blue:'파란색',
    yellow:'노란색',
};

console.log(color);
console.log(color['blue']);
console.log(color['yellow']);
console.log('----------');
/**
 * Array Type
 * 
 * 값을 리스트로 나열 할 수 있는 타입니다.
 */
const iveMenbersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
];
console.log(iveMenbersArray);
console.log('----------');
/**
 * index
 * 
 * 0부터 시작하며 1씩 올라간다 Array 값에 할당된다.
 * 예) 안유진이 0부터 시작
 */

console.log(iveMenbersArray[4]);
console.log(iveMenbersArray[3]);

iveMenbersArray[3] = '이동규'; // <-- 지정된 Array의 index값을 바꿀수도있다.
console.log(iveMenbersArray);
console.log('----------');
/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시한다.
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 갑에의해 타입을 "추론"한다.
 * Js -> dynamic typing
 */
