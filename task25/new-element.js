// Задача: Создать и добавить стиль для элемента: 
// Напишите функцию, которая создает новый элемент, 
// добавляет его в DOM и устанавливает для него стиль с помощью CSS.

function createNewElement() {
    // create a new div
    let newDiv = document.createElement('div');
    // add id
    newDiv.setAttribute('id', 'newContainer');
    // create another div
    let newEl = document.createElement('div');
    // add text 
    newEl.textContent = 'new element';
    // add id 
    newEl.setAttribute('id', 'newDiv');
    // add to DOM
    let title = document.getElementById('title');
    title.parentNode.insertBefore(newDiv, title);
    newDiv.appendChild(newEl);
}

createNewElement();

// text changes if you hover the element
document.getElementById('newDiv').addEventListener("mouseover", () => {
    document.getElementById('newDiv').textContent = 'press';
});

// text changes back 
document.getElementById('newDiv').addEventListener("mouseout", () => {
    document.getElementById('newDiv').textContent = 'new element';
});

function createAnotherElement() {
    // create new div 
    let newEl = document.createElement('div');
    // add text
    newEl.textContent = 'delete element';
    // add id 
    newEl.id = 'anotherDiv';
    // add to DOM
    let container = document.getElementById('newContainer');
    if(container) {
        container.appendChild(newEl);
        // add delete 
        document.getElementById('anotherDiv').addEventListener("click", function(){
            let container = document.getElementById('imgContainer');
            if(container.contains(document.getElementById('newImg'))) {
                // deletes the last img
                container.removeChild(container.lastChild);
            }
        });
    } else {
        console.log('there is no such element');
    }
}   

// new element appears after click

document.getElementById('newDiv').addEventListener("click", function(){
    if(!document.getElementById('imgContainer')) {
        let container = document.createElement('div');
        container.id = 'imgContainer';
        document.getElementById('title').insertAdjacentElement('afterend',container);
    }
    // create img tag
    let img = document.createElement('img');
    // add id
    img.setAttribute('id', 'newImg');
    // add img 
    img.src = 'https://i.pinimg.com/564x/61/46/31/61463105ffef1a8345ef4d5640be55de.jpg';
    // add to DOM
    document.getElementById('imgContainer').appendChild(img);
    if(!document.getElementById('anotherDiv')) {
        createAnotherElement();
    }
});