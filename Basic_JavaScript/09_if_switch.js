/**
 * If and Switch
 */
let number = 3;

if (number % 2 === 0){
    console.log('number 변수는 짝수입니다.'); // if문의 기본 양식 괄호안에는 true와 false를 반환하려는 조건을 작성.
}else {
    console.log('number 변수는 홀수입니다.');
}

if (number % 2 === 0){
    console.log('2의 배수입니다.');
}else if(number % 3 === 0){
    console.log('3의 배수입니다.')
}else if(number % 4 === 0) {
    console.log('4의 배수입니다.');
}else {
    console.log('2, 3, 4의 배수가 아닙니다.');
}

const englishDay = 'monday';

let koreanDay;

switch(englishDay){
    case 'monday':
        koranDay = '월요일';
        break;
    case 'tuesday':
        koreanDay = '화요일';
        break;
    case 'friday':
        koreanDay = '금요일';
        break;
    default:
        koreanDay = '주말';
        break;
}

console.log(koranDay);