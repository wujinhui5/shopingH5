// 添加小圆点
export function setDot(slide, len, cname) {
    var dotContainer = document.createElement('ul');
    dotContainer.className = cname;

    for (let i = 0; i < len; i++) {
        let dot = document.createElement('li');
        dotContainer.appendChild(dot);
        if (i === 0) {
            dot.className = 'current';
        }
    }
    slide.appendChild(dotContainer);
    let width = -dotContainer.offsetWidth / 2 + 'px';
    dotContainer.style.marginLeft = width;
}