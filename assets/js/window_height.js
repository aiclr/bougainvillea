window.addEventListener('DOMContentLoaded', function () {
    const screenHeight = window.innerHeight;
    document.documentElement.style.setProperty('--screen-height', `${screenHeight - 150}px`);
    window.addEventListener('resize', function () {
        const screenHeight = window.innerHeight;
        document.documentElement.style.setProperty('--screen-height', `${screenHeight - 150}px`);
    });
});
