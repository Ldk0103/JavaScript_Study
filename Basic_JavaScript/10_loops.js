/**
 * Loops (반복문)
 * 
 * 1. for
 * 2. while
 */
for(let i = 0; i < 10; i ++){
    console.log(i);
} // for(기준을 잡을 변수; 조건(언제까지 실행 할지.); 한번 실행시 어떠한 행동을 할건지)

for(let i = 1; i < 3; i++){
    for(let j = 3; j > 0; j--){
        console.log(i, j);
    }
}

let square = '';
let side = 6;

for(let i=0; i < 6; i++){
    for(let j=0; j < side; j++){
        square += '*';
    }
    square += '\n';
}

console.log(square);

/**
 * for...in loop (배열에있는 key값을 가져오고싶을때 배열순서)
 */
const yuJin = {
    name:'안유진',
    year: 2003,
    group: '아이브',
}

for(let key in yuJin){
    console.log(key);
} //키 값을 받을수 있다.

const iveMenbersArray = ['안유진', '가을', '레이', '장원영'];

for(let key in iveMenbersArray){
    console.log(key);
    console.log(`${key}:${iveMenbersArray[key]}`);
}

/**
 * for...of loop (배열에 있는 index값을 가져오고싶을때.)
 */
for(let value of iveMenbersArray){
    console.log(value);
}

/**
 * While
 */
let number = 0;

while(number < 10){
    number ++; 
}

console.log(number);

/**
 * do...while // 대괄호 안 조건을 먼저 실행하고 while 문을 실행합니다.
 */
number = 0;

do{
    number++;
} while(number < 10);

console.log(number);

/**
 * break // 반복문을 깨뜨린다. 탈출한다.
 */
for(let i = 0; i < 10; i++){
    if(i === 5) {
        break;
    }
    console.log(i);
}
console.log('--------');
number = 0;

while(number < 10) {
    if(number === 5) {
        break;
    }

number ++;
console.log(number);
}

/**
 * continue // i는 5에서 continue가 실행되며 5가 스킵되고 나머지를 진행합니다.
 */
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}
console.log('--------');
number = 0;

while(number < 10){
    number ++;

    if(number === 5){
        continue;
    }
    
    console.log(number);
}