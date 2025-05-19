// 매개변수와 인수
/**
 * 함수 선언문
 * 매개변수는 함수 몸체 내부에서만 참소할 수 있음 
 * 매개변수의 개수와 인수의 개수가 일치하지 않을시 NaN 출력
 * 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시함함
 */
function add(x, y) {
    return x + y;
}

// 함수 호출(매개변수 4, 5가 인수 x,y로 전달)
// console.log(add(4,5));

// function add(x, y) {
//     if(typeof x !== 'number' || typeof y !== 'number') {
//         throw new TypeError('인수는 모두 숫자타입이여야 합니다');
//     }
//     return x + y;
// }
// console.log(add(4,3));
// console.log(add('a', 'b'));

// 값에의한 호출, 참조에 의한 호출
function changVal(primtive, obj) {
    primtive += 200; //
    obj.name= 'kim';
}

// 기존 값인 원시값(100) / 참조 값(Lee)
let num = 100;
let person = {name : 'Lee'};

// 함수가 호출되며 원시값은 유지되지만 참조값은 원본이 훼손된다.
changVal(num, person);

// 출력은 num은 100, name:'kim'으로 변경된다
console.log(num);
console.log(person);

// 즉시실행함수(익명) 변수에 할당하여 호출해야함
const add1 = (function () {
    let a = 3;
    let b = 5;
    return a + b;
}());
console.log(add1);

// 즉시실행함수 일반 함수처럼 인수를 전달 할 수 있다.
res = (function(a,b) {
    return  a * b;
}(4,5));
console.log(res);

// 재귀함수 (자기함수를 호출하는 함수)
let multifly = function factorail(f) {
    if(f <= 1) return 1;
    return f * factorail(f - 1);
}
console.log(multifly(4));

// 중첩함수 (함수 내부에 정의된 함수)
function outer() {
    let a = 10;

    function inner() {
        let b = 20;

        console.log(a + b);
    }
    inner();
}
outer();

// 콜백 함수 (어떤 일을 반복 수행하는 repeat함수)
// 0부터 4까지 출력을 반복하는 콜백함수
function repeat(n) {
    for(let i=0; i<n;  i++) {
        console.log(i);
    }
}
repeat(5);

// 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수
// 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차 함수