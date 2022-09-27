import { setDot } from './setDot.js';

var nav = document.querySelector('.main-nav');
var navUl = nav.querySelector('ul');

function animateNav() {
    let dotContainer = nav.querySelector('.dot-container');
    let dots = dotContainer.querySelectorAll('li');

    // 切换小圆点样式
    function changeDot(oldI, newI) {
        dots[oldI].className = '';
        if (newI === -1) {
            dots[dots.length - 1].className = 'current';
        } else if (newI === dots.length) {
            dots[0].className = 'current';
        } else {
            dots[newI].className = 'current';
        }
    }

    // 切换nav
    let index = 0;
    function next() {
        if (index === 0) {
            navUl.style.transition = 'all .3s ease 0s';
            index++;
            navUl.style.transform = 'translate(' + index * (-50) + '%)';
            changeDot(index - 1, index);
        }
    };
    function last() {
        if (index === 1) {
            navUl.style.transition = 'all .3s ease 0s';
            index--;
            navUl.style.transform = 'translate(' + index * (-50) + '%)';
            changeDot(index + 1, index);
        }
    }
    let offsetStart;
    navUl.addEventListener('touchstart', function (e) {
        offsetStart = e.targetTouches[0].pageX;
    });
    navUl.addEventListener('touchmove', function (e) {
        e.preventDefault();
    })
    navUl.addEventListener('touchend', function (e) {
        let offsetAll = e.changedTouches[0].pageX - offsetStart;
        if (offsetAll >= 50) {
            last();
        } else if (offsetAll <= -50) {
            next();
        }
    })
}

setDot(nav, 2, 'dot-container');
animateNav();