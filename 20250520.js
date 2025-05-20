//this 키워드 - 자신이 속한 객체 / 자신이 생성할인스턴스를 가리키는 참조 변수이다
const person = {
    name : '이동규',
    age : 23,
    getName() {
        // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
        return person.name; 
    },
    getAge() {
        return person.age; 
    }
};
// 메서드 getName을 호출한 객체는 person이다.

console.log(person.getName() + person.getAge());