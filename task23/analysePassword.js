// Анализатор сложности пароля: создайте функцию, 
// которая оценивает сложность введенного пользователем пароля. 
// Необходимо анализировать длину пароля, использование различных символов, 
// наличие чисел и букв в разных регистрах. 
// Выведите пользователю оценку сложности пароля и предложите улучшения, если пароль слишком слабый.

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    // получаем пароль из инпута и записываем в переменную
    let password = getPassword();
    // преобразуем в массив
    let arr = Array.from(password);

    // рейтинг сложности пароля
    let rating = 0;
    // массив ошибок;
    let errors = [];
    
    // проверка на длину пароля
    arr.length < 8? errors.push('слишком короткий') : rating++;
    // проверка на числа
    password.match(/\d+/g) ? rating++ : errors.push('нет цифр');
    // проверка на спецсимволы
    password.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)? rating++ : errors.push('нет спецсимволов');
    // проверка на использования регистров
    password.match(/[A-Z]/g)? rating++ : errors.push('нет заглавных букв');

    // отправляем ошибку, если есть 
    if(errors.length > 0) {
        showRating(errors, rating);
    }

    console.log(rating);
    console.log(password);
});

const getPassword = () => {
    const formData = new FormData(document.querySelector('#form'));
    const data = Object.fromEntries(formData);
    return data.password;
}

const showRating = (errors, rating) => {
    let result = document.getElementById('result');
    result.textContent = 'Слабый пароль: '
    for(let i=0; i<errors.length; i++) {
        if(errors.length > 1) {
            i === errors.length - 1
            ? result.textContent += errors[i] 
            : result.textContent += `${errors[i]}, `;
        } else {
            result.textContent += errors[i];
        }
    }
    document.getElementById('rating').textContent = 'Оценка сложности пароля: ' + rating;
}