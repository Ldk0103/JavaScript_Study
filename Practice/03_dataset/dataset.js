let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let imgBox = document.querySelector('#imgBox');

btn1.addEventListener('click', function() {
    let imgUrl = btn1.dataset.img;
    imgBox.setAttribute('src', imgUrl);
});
btn2.addEventListener('click', function() {
    let imgUrl = btn2.dataset.img;
    imgBox.setAttribute('src', imgUrl);
});
btn3.addEventListener('click', function() {
    let imgUrl = btn3.dataset.img;
    imgBox.setAttribute('src', imgUrl);
});




