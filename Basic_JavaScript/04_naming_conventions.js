/**
 * Naming Conventions 
 * 변수명 또는 함수명 이름 지정 규칙
 * 
 * 1. 일반적으로 영어(라틴문자)를 사용하며 문자와 숫자를 모두 사용 할 수 있다.
 * 2. 특수기호는 언더스코어(_)와 달러($)를 사용 할 수 있다.
 * 3. 숫자로 이름을 시작 할 수 없다.
 *  1Name, 2Hello
 * 4. 키워드는 변수명으로 사용 할 수 없다.
 *  var const = 'var';
*/
//사용가능 예시
 
let ldg = '이동규';
var $ldg = '이동규';
const _ldg = '이동규';

console.log(ldg);
console.log($ldg);
console.log(_ldg);

/**
 * Naming Convention 2
 * 암묵적인 이름 지정 규칙
 * 
 * 1. camelCase - 카멜 표기법 (대부분의 언어에서 많이 사용) 
 * 2. snake_case - 서로 다른뜻의 단어를 언더스코어를 사용하여 묶는 방법 예) 파일 이름
 * 3. PascalCase - 첫번째 글자를 대문자로 사용하여 카멜 표기법과 비슷함 (C# / 마이크로소프트 계열의 언어에서 사용)
 */

