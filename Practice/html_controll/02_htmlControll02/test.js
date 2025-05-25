let inputBox = document.querySelector('input');
let btn = document.querySelector('#button');
let addBtn = document.querySelector('#before');
let delBtn = document.querySelector('#targetRemove');
let removeBtn = document.querySelector('.removeBtn');

btn.addEventListener('click', function() {
    let li = document.createElement('li');
    let ul = document.querySelector('ul');
    li.textContent=inputBox.value;
    li.setAttribute('class', 'item');

    let button = document.createElement('button');
    button.textContent="X";
    button.addEventListener('click', function(delEvent) {
        delEvent.target.parentNode.remove();
    });
    li.appendChild(button);
    ul.appendChild(li);
});

addBtn.addEventListener('click', function() {
    let li = document.createElement('li');
    let ul = document.querySelector('ul');
    let target = document.querySelector('li#target');
    li.textContent=inputBox.value;
    li.setAttribute('class', 'item');
    ul.insertBefore(li, target);

    let button = document.createElement('button');
    button.textContent="X";
    button.addEventListener('click', function(delEvent) {
        delEvent.target.parentNode.remove();
    });
    li.appendChild(button);
    ul.appendChild(li);
});

delBtn.addEventListener('click', function() {
    let target = document.querySelector('li.item');
    target.remove();
});