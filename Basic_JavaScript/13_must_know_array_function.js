/**
 * Array Funstions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push() array의 길이를 알려줌
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

console.log('--------');

// pop() 마지막 엘러멘트를 삭제 후 반환 해 준다.
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('--------');

// Shift() 맨 앞 엘러멘트를 삭제 후 반환 해 준다.
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift() push와 같은 기능이며 맨 앞에 엘러멘트를 추가 후 array의 길이를 알려준다.
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

// splice() 삭제하고싶은 index값 지정과 몇번까지 삭제하고 싶은 값을 넣으면 삭제한다.
console.log(iveMembers.splice(0, 3));
console.log(iveMembers); // 삭제된 후 남은 Array를 출력

console.log('--------');

let iveMembers2 = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

// concat() 다른 공간의 메모리에 코드팩토리를 저장한다. (원래 Array는 변화가 없다.)
console.log(iveMembers2.concat('코드팩토리'));
console.log(iveMembers2);

// slice() 기존 splice와 다르게 기존 Array를 건들이지 않는다. / 원하는 범위를 "잘라와서 출력"한다.
console.log(iveMembers2.slice(0, 3));
console.log(iveMembers2); // 기존 Array를 건들지 않고 잘라온것을 볼 수 있다. (다른 메모리를 사용하기 때문)

console.log('--------');

// spread operator 리스트를 펼쳐서 볼 수 있다.
let iveMembers3 = [
    ...iveMembers2,
]
console.log(iveMembers3);

console.log('--------');

let iveMembers4 = [
    iveMembers2,
]
console.log(iveMembers4);

console.log('--------');

// join()  ","를 기준으로 String타입이 정리가된다. / string으로 묶을때 join을 굉장히 많이 사용한다.
console.log(iveMembers2.join());
console.log(iveMembers2.join('/'));

// sort()
// 오름차순으로 정렬
iveMembers2.sort();
console.log(iveMembers2.join(' > '));

// reverse()
// 내림차순으로 정렬
console.log(iveMembers2.reverse());

let numbers = [
    1,
    9,
    3,
    5,
];
console.log(numbers);

// a, b를 비교했을때
// 1. a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2. a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3. 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b)=>{
    return a < b ? 1 : -1;
});
console.log(numbers);

// map() 기존 Array를 변경하지 않고 새로운 Array를 만듭니다. 
console.log(iveMembers2.map((x) => x));
console.log(iveMembers2.map((x) => `아이브: ${x}`));

console.log(iveMembers2.map((x) => {
    if(x === '안유진') {
        return `아이브: ${x}`;
    }else{
        return x;
    }
}));

// filter() filter를 사용하여 원하는 값만 반환 받을 수 있다. 예) 짝수 홀수를 구할 수 있음,.
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

// find() filter와 기능은 비슷하지만 해당회는 첫번째 값만 반환 한다.
console.log(numbers.find((x) => x % 2 === 0));

// findIndex() finde와 똑같지만 해당되는 값의 Index를 반환 한다.
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
// 초기값인 0이 p에 입력되며 "numbers" Array의 첫번째 값인 1이 n에 입력된다. 즉 0 + 1 = 1이 반환되며 다음 Array인 9가 n에 또 저장되며
// 1 + 9 = 10이 입력된다. 이 과정이 반복하여 numbers 리스트의 모든 값들을 다 순회할때까지 반복하여 결국 모든 값을 다 더한 25가 반환된다.
console.log(numbers.reduce((p, n) => p + n,0)); 
