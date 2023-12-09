// Разработайте страницу, отображающую таблицу с данными. Данные необходимо подгружать из этого источника.
// Требования:
// данные должны загружаться при загрузке страницы
// необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
// необходимо реализовать клиентскую пагинацию (50 элементов на странице)

// получаем данные из источника
async function fetchData() {
    let url = 'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true';
    try{
        const response = await fetch(url);
        const result = response.json();
        return result;
    } catch(err){
        // кидаем ошибку, если fetch-запрос прошел неуспешно
        throw new Error(err);
    }
}

// цифры 
let pagNum = document.getElementById('pagination-numbers');
// строка в таблице
let row = document.getElementsByClassName('row');
// кол-во строк на одной странице
let itemsPerPage = 50;
// текущая страница
let currentPage = 1;
// спиннер 
let loading = document.getElementById('loading');

// отображаем таблицу
function showPage(currentPage, data) {
    // отображаем контейнеры 
    document.getElementById('container').style.display = 'flex';
    document.getElementById('pagination').style.display = 'flex';

    // добавляем пагинацию и показываем текущую стр
    showPagination(data, currentPage);

    let arr = []; 
    let start = 0;
    let end = 50;

    // пушим в массив 50 пользователей
    show50ItemsPerPage(start, end, arr, data);

    // кнока prev 
    let prev = document.getElementById('prev');
    // кнока next
    let next = document.getElementById('next');

    if(arr.length > 0) {
        renderTable(arr, start);
        // прошлая страница
        prev.addEventListener('click', () => {
            if(currentPage > 1) {
                // назад
                currentPage--;
                // убираем все с массива
                arr = [];
                // начало, индекс
                start = start - 49; 
                // конец, индекс 
                end = end - 50;
                // пушим в массив след 50 пользователей
                show50ItemsPerPage(start, end, arr, data);
                // рендеринг таблицы с новыми данными
                renderTable(arr, start);
                // поднимаем страницу вверх
                window.scrollTo(0, 0);
                // показываем текующую стр
                showPagination(data, currentPage);
            }
        });
        // след страница
        next.addEventListener('click', () => {
            if(currentPage < Math.ceil(data.length / itemsPerPage)) {
                // вперед
                currentPage++;
                // убираем все с массива
                arr = [];
                // начало, индекс
                start += 49;
                // конец, индекс 
                end += 50;
                // пушим в массив след 50 пользователей
                show50ItemsPerPage(start, end, arr, data);
                // рендеринг таблицы с новыми данными
                renderTable(arr, start);
                // поднимаем страницу вверх
                window.scrollTo(0, 0);
                // показываем текующую стр
                showPagination(data, currentPage);
            }
        });
    }
}

function show50ItemsPerPage(start, end, arr, data) {
    for(let i=start; i < end; i++) {
        arr.push(data[i]);
    }
}

// рендерим таблицу 
function renderTable(data, start) {
    let users = data;
    let content = '';
    for(let [index, user] of users.entries()) {
        content += `<div class="row">
            <div class="column" id="column-id">${index + 1 + start}</div>
            <div class="column column-1" id="column-1">${user.fname}</div>
            <div class="column column-2" id="column-2">${user.lname}</div>
            <div class="column column-3" id="column-3">${user.tel}</div>
            <div class="column column-4" id="column-4">${user.address}</div>
            <div class="column column-5" id="column-5">${user.city}</div>
            <div class="column column-6" id="column-6">${user.state}</div>
            <div class="column column-7" id="column-7">${user.zip}</div>
        </div>`;
    }
    document.getElementById('table').innerHTML = content;
}

function showPagination(data, currentPage) {
    // кол-во страниц 
    let pageNumbers = Math.ceil(data.length / itemsPerPage);
    let content = '';
    for(let i=1; i <= pageNumbers; i++) {
        content += `<div class='pagination__number ${(currentPage === i) ? 'current' : ''}'>${i}</div>`;
    }
    // отображаем кол-во страниц
    document.getElementById('pagination-numbers').innerHTML = content;
}

window.addEventListener('DOMContentLoaded', async() => {
    // запускаем спиннер
    loading.style.display = 'block';
    // получаем данные
    let data = await fetchData();
    if(data) {
        // убираем спиннер
        loading.style.display = 'none';
        // отображаем таблицу
        showPage(currentPage, data);
    }
});

// индекс, чтобы определить колонку
let index;

function showMenu(e) {
    index = e.id.slice(-1);
    document.getElementById(`menu-${index}`).classList.toggle('menu__active');

    for(let i = 1; i <= 7; i++){
        // пропускаем текущий индекс
        if (i !== parseInt(index)) {
            let btn = document.getElementById(`btn-${i}`);
            // теперь нельзя открыть другие меню, пока не закроем текущее
            btn.disabled = !btn.disabled; 
        }
    }
}

async function sort(e) {
    // property для object
    let column = findColumn();
    // запрашиваем данные 
    let data = await fetchData();
    // сортируем, передаем текущую колонку, данные с сервера, property
    await sortData(e, data, column);
    // убираем меню и возвращаем всем кнопкам функию showMenu
    hideMenu();
    // рендерим таблицу с отсортированными данными, передаем текущую страницу и данные
    showPage(currentPage, data);
}

function hideMenu() {
    document.getElementById(`menu-${index}`).classList.remove('menu__active');
    for(let i = 1; i <= 7; i++){
        let btn = document.getElementById(`btn-${i}`);
        btn.disabled = false; 
    }
}


function findColumn() {
    const arrColumn = ['fname', 'lname', 'tel', 'address', 'city', 'state', 'zip'];
    // ищем property по индексу 
    for(let i=0; i< arrColumn.length; i++) {
        if(index - 1 === i) {
            return arrColumn[i];
        }
    }
    return result;
}

async function sortData(e, data, property) {
    data.sort((a,b) => {
        if(a[property] < b[property]){
            return  e.id === 'lowToHigh'? -1 : 1;
        } else if(a[property] > b[property]) {
            return  e.id === 'lowToHigh'? 1 : -1;
        } else return 0;
    });
}