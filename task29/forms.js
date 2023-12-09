// Задача: Взаимодействие с формами: 
// Напишите функцию, которая получает данные из формы на веб-странице 
// и выполняет определенные действия с этими данными, 
// например, отправляет их на сервер или отображает всплывающее окно с результатами.

// валидация инпутов

function validateSurname(input) {
    let regex = /^[а-яА-ЯёЁa-zA-Z]+$/;
    let error = document.getElementById('error__surname');
    if(input.value.trim().match(regex)) {
        error.textContent = '';
    } else {
        error.textContent = 'Введите фамилию верно';
    }
}

function validateName(input) {
    let regex = /^[а-яА-ЯёЁa-zA-Z]+$/;
    let error = document.getElementById('error__name');
    if(input.value.trim().match(regex)) {
        error.textContent = '';
    } else {
        error.textContent = 'Введите имя верно';
    }
}

function validatePaternal(input) {
    let regex = /^[а-яА-ЯёЁa-zA-Z]+$/;
    let error = document.getElementById('error__paternal');
    if(input.value.trim().match(regex)) {
        error.textContent = '';
    } else {
        error.textContent = 'Введите отчество верно';
    }
}

// фамилия/имя/отчество с заглавной буквой ввод

let input = document.querySelector(".input__text");

input.addEventListener("input", function() {
    if(this.value !== '') {
        this.value = this.value[0].toUpperCase() + this.value.slice(1);
    } return;
})

// получаем данные и отображаем 

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const formData = new FormData(document.querySelector('#form'));
    const data = Object.fromEntries(formData);
    const result = JSON.stringify(data);
    console.log(result);
    alert(`Добрый день, ${data.surname} ${data.name} ${data.paternal}!`);
    return result;
});