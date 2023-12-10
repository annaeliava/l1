// Задача: Создать и добавить стиль для элемента: 
// Напишите функцию, которая создает новый элемент, 
// добавляет его в DOM и устанавливает для него стиль с помощью CSS.

function createNewElement() {
    // создаем новый div
    let newDiv = document.createElement('div');
    // добавляем id
    newDiv.setAttribute('id', 'newContainer');
    // создаем другой div
    let newEl = document.createElement('div');
    // добавляем текст 
    newEl.textContent = 'new element';
    // добавляем id 
    newEl.setAttribute('id', 'newDiv');
    // добавляем элемент в DOM
    let title = document.getElementById('title');
    title.parentNode.insertBefore(newDiv, title);
    newDiv.appendChild(newEl);
}

createNewElement();

// текст меняется при hover
document.getElementById('newDiv').addEventListener("mouseover", () => {
    document.getElementById('newDiv').textContent = 'press';
});

// меняется текст обратно 
document.getElementById('newDiv').addEventListener("mouseout", () => {
    document.getElementById('newDiv').textContent = 'new element';
});

function createAnotherElement() {
    // создаем новый div
    let newEl = document.createElement('div');
    // добавляем текст 
    newEl.textContent = 'delete element';
    // добавляем id
    newEl.id = 'anotherDiv';
    // добавляем элемент в DOM
    let container = document.getElementById('newContainer');
    if(container) {
        container.appendChild(newEl);
        // добавляем функцию удалить 
        document.getElementById('anotherDiv').addEventListener("click", function(){
            let container = document.getElementById('imgContainer');
            if(container.contains(document.getElementById('newImg'))) {
                // удаляем последнюю картинку
                container.removeChild(container.lastChild);
            }
        });
    } else {
        console.log('there is no such element');
    }
}   

// новые элементы появляется при нажатии на кнопку

document.getElementById('newDiv').addEventListener("click", function(){
    if(!document.getElementById('imgContainer')) {
        let container = document.createElement('div');
        container.id = 'imgContainer';
        document.getElementById('title').insertAdjacentElement('afterend',container);
    }
    // создаем тэг img
    let img = document.createElement('img');
    // добавляем id
    img.setAttribute('id', 'newImg');
    // добавляем ссылку на картинку
    img.src = 'https://i.pinimg.com/564x/61/46/31/61463105ffef1a8345ef4d5640be55de.jpg';
    // добавляем элемент в DOM
    document.getElementById('imgContainer').appendChild(img);
    if(!document.getElementById('anotherDiv')) {
        createAnotherElement();
    }
});