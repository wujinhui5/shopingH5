var main = document.querySelector('.main');
var discounts = main.querySelector('.discounts');
var commodity = discounts.querySelector('.commodity');
var disUl = commodity.querySelector('ul');
var disLi = disUl.querySelectorAll('li');

disUl.style.width = 0.85 * disLi.length + 'rem';

// 求倒计时,这里的倒计时的终点设置为第二天的00：00
function getCountDown() {
    let now = new Date();
    let s = 60 - now.getSeconds();
    let h = s != 0 ? 23 - now.getHours() : 24 - now.getHours();
    let m = h != 0 ? 59 - now.getMinutes() : 60 - now.getMinutes();

    h = h > 9 ? h : '0' + h;
    m = m > 9 ? m : '0' + m;
    s = s > 9 ? s : '0' + s;
    return [h, m, s]
}

let countDown = discounts.querySelector('.count-down');
let hour = countDown.querySelector('.hour');
let minute = countDown.querySelector('.minute');
let second = countDown.querySelector('.second');
setInterval(function () {
    let date = getCountDown();
    hour.innerText = date[0];
    minute.innerText = date[1];
    second.innerText = date[2];
}, 1000);
