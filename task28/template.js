// Задача: Создать и добавить элемент с использованием шаблонов: 
// Напишите функцию, которая создает новый элемент с использованием шаблонов 
// (например, с помощью тега <template>) и добавляет его в DOM.

document.getElementById('btn').addEventListener('click', () => {
    // контейнер, в котором будут расположены все новые элементы
    let container = document.getElementById('container');

    // проверяем, существует ли данный элемент
    if(!container) {
        // если нет, создаем, присваиваем ему id и добавляем его в DOM
        container = document.createElement('div');
        container.id = 'container';
        document.getElementById('btn').insertAdjacentElement('afterend',container);
    }

    // создаем новый элемент
    let newDiv = document.createElement('div');
    // присваиваем ему класс
    newDiv.setAttribute('class', 'div')
    // активируем шаблон
    newDiv.append(template.content.cloneNode(true));
    // добавляем в DOM
    document.getElementById('container').append(newDiv);
});