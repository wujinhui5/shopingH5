import { setDot } from './setDot.js';
import { animateSlide } from './animateSlide.js';

var slideContainer = document.querySelector('.slide-container');
var slide = slideContainer.querySelector('.slide');
var slideUl = slideContainer.querySelector('.slideUl');
var slideList = slide.querySelectorAll('li');

// 使用定位把轮播图的图片放到一行
for (let i = 0; i < slideList.length; i++) {
    slideList[i].style.left = 100 * i + '%';
}


setDot(slide, slideList.length - 2, 'dot-container');
animateSlide(slide, slideUl, slideList.length);