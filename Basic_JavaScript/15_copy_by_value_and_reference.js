/**
 * copy be value 값에 의해 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1. 기본적으로 모든 primitive 값은 copy by value다
 * 2. 객체는 copy by reference다
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('--------');
console.log(original);
console.log(clone);
// 값을 가져와서 "clone"에 전달하여 출력하는 것이 copy by value


// Copy by Reference
let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('--------');

originalObj['group'] = '규코드'; // 둘 다 group value가 규코드가 나오는 이유는 let cloneObj = originalObj의 값을 레퍼런스하여 가져왔기 때문.
console.log(originalObj);
console.log(cloneObj); 

console.log(originalObj === cloneObj);
console.log(original === clone);
 
originalObj = {
    name: '이동규',
    group: '규코드',
};
console.log(originalObj === cloneObj);

let yuJin = {
    name: '안유진',
    group: '아이브',
}

/**
 * Spread Oparator
 */
const yuJin2 = {
    ...yuJin,
};
console.log(yuJin2);

const yuJin3 = { // 값을 추가 할 수도 있다.
    year: 2003,
    ...yuJin2,
};
console.log(yuJin3);

const yuJin4 = {
    name: '이동규', //키워드의 순서에 따라서 출력 값이 변경될수도 안될수도 있다.
    ...yuJin3,
};
console.log(yuJin4);

const numbers = [1, 3, 5];
const numbers2 = [
    10,
    ...numbers,
];
console.log(numbers2);