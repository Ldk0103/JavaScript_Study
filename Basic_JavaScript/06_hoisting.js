/**
 * Hoisting
 * 
 */
console.log('Hello');
console.log('World');
console.log('----------');

let name;
console.log(name);
name = '이동규';
console.log(name);
/**
 * Hoisting은 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상.
 */