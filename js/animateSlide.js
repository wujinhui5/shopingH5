export function animateSlide(slide, slideUl, len) {
    let dotContainer = slide.querySelector('.dot-container');
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

    // 动画结束事件
    slideUl.addEventListener('transitionend', function () {
        if (index === len - 1) {
            index = 1;
            slideUl.style.transition = 'none';
            slideUl.style.transform = 'translate(' + index * (-100) + '%)';
        } else if (index === 0) {
            index = len - 2;
            slideUl.style.transition = 'none';
            slideUl.style.transform = 'translate(' + index * (-100) + '%)';
        }
    })

    // 切换轮播图
    function nextSlide() {
        if (index === len - 1) {
            slideUl.style.transition = 'all .3s ease 0s';
            index == 1;
            slideUl.style.transform = 'translate(' + index * (-100) + '%)';
            changeDot(len - 3, 0);
        } else {
            slideUl.style.transition = 'all .3s ease 0s';
            index++;
            slideUl.style.transform = 'translate(' + index * (-100) + '%)';
            changeDot(index - 2, index - 1);
        }
    };
    function lastSlide() {
        slideUl.style.transition = 'all .3s ease 0s';
        index--;
        slideUl.style.transform = 'translate(' + index * (-100) + '%)';
        changeDot(index, index - 1);
    }

    // 设置定时器
    function setTimer() {
        return setInterval(function () {
            nextSlide();
        }, 2000);
    }
    // 初始化定时器，定时切换轮播图
    let index = 1;
    var timer;
    timer = setTimer();

    // 滑动切换
    let offsetStart;
    slideUl.addEventListener('touchstart', function (e) {
        clearInterval(timer);
        offsetStart = e.targetTouches[0].pageX;
    });
    slideUl.addEventListener('touchmove', function (e) {
        e.preventDefault();
    })
    slideUl.addEventListener('touchend', function (e) {
        let offsetAll = e.changedTouches[0].pageX - offsetStart;
        if (offsetAll >= 50) {
            lastSlide();
        } else if (offsetAll <= -50) {
            nextSlide();
        }
        timer = setTimer();
    })
}