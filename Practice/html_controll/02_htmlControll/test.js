// 1) get 메서드 사용
// let title = document.getElementById('title');
// console.log(title);
// title.textContent = '헬스 3대 운동';

// let items = document.getElementsByClassName('item');

// let liList = document.getElementsByTagName('li');
// console.log(liList);

// 2) html 요소 쿼리
// let h2 = document.querySelector('#title');
// console.log(h2);

// let item = document.querySelectorAll('.item');
// console.log(item);


// html 요소 조작하기
let input = document.querySelector('input');
input.removeAttribute('placeholder');

let helloItem = document.querySelector('.hello');
// helloItem.style.color="blue";
// helloItem.style.backgroundColor="#000";
helloItem.classList.add('dark');
helloItem.removeAttribute('.dark');
