let addBtn = document.querySelector('#button');
let addBtnBefore = document.querySelector('#before');
let inputBox = document.querySelector('input');

addBtnBefore.addEventListener('click', function() {
    let li = document.createElement('li');
    let ul = document.querySelector('ul');
    let targetLi = document.querySelector('li#target');
    li.textContent = inputBox.value;
    ul.insertBefore(li, targetLi);
});