// Задача: Добавить анимацию для элемента: 
// Напишите функцию, которая добавляет анимацию для элемента на веб-странице, 
// например, плавное изменение его положения или размера.

document.getElementById('ball').addEventListener('click', () => {
    // добавляем класс, чтобы анимация появилась
    document.getElementById('ball').setAttribute('class', 'animatedBall');
});

document.getElementById('word').addEventListener('click', () => {
    // что мы хотиим анимировать
    let word = document.getElementById('word');
    // начальный размер шрифта
    let startFontSize = 16;
    // конечный размер шрифта
    let targetFontSize = 24;
    // длительность анимации
    let animationDuration = 3000;
    // частота
    let frameRate = 30;

    let interval = setInterval(() => {
        const step = animationDuration / frameRate;
        startFontSize += (targetFontSize - startFontSize) / (animationDuration / step);
    
        word.style.fontSize = `${startFontSize}px`;
    
        if (Math.abs(targetFontSize - startFontSize) < 0.1) {
            word.style.fontSize = `${targetFontSize}px`;
            clearInterval(interval);
        }
    }, animationDuration / frameRate);

});