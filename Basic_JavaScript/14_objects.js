/**
 * Object / 객체
 */

// key : value pair
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function(){
        return `${this.name}이 춤을 춥니다.`; // this 키워드를 사용하여 현재 입력된 객채의 값을 가져와 사용할 수 있다.
    }
};

console.log(yuJin);
console.log(yuJin.name);

const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '규코드';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);

/**
 * 객체의 특징
 * 
 * 1. const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2. 객체 안의 프로퍼티나 메소드는 변경 할 수 있다.
 */

const wonYoung = {
    name: '장원영',
    group: '아이브',
}
console.log(wonYoung);

wonYoung['group'] = '규코드';
console.log(wonYoung);

/**
 * 모든 키 값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 벨류 값 다 가져오기
 */
console.log(Object.values(wonYoung));

const name = '안유진';

const yuJin3 = {
    name,
};
console.log(yuJin3);