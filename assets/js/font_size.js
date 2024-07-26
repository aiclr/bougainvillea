// 字体随窗口大小改变
window.addEventListener('DOMContentLoaded', set_rem_unit);
window.addEventListener('resize', set_rem_unit);

function set_rem_unit() {
    const docEL = document.documentElement;
    const clientWidth = docEL.clientWidth;
    console.log(clientWidth)
    let rem;
    if (clientWidth < 576) {
        rem = 10;
    }
    if (clientWidth >= 576 && clientWidth < 768) {
        rem = 11;
    }
    if (clientWidth >= 768 && clientWidth < 992) {
        rem = 12;
    }
    if (clientWidth >= 992 && clientWidth < 1200) {
        rem = 12;
    }
    if (clientWidth >= 1200 && clientWidth < 1400) {
        rem = 13;
    }
    if (clientWidth >= 1400 && clientWidth < 1920) {
        rem = 14;
    }
    if (clientWidth >= 1920 && clientWidth < 2560) {
        rem = 14;
    }
    if (clientWidth >= 2560) {
        rem = 14;
    }
    docEL.style.fontSize = rem + 'px';
}