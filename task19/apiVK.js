// Реализовать виджет, отображающий список постов из любого паблика в VK (подойдет любой паблик, где постов очень много). 
// Например, с помощью этой функции API VK. Виджет должен иметь фиксированные размеры и возможность прокрутки. 
// При прокрутке содержимого виджета до конца должны подгружаться новые посты. 
// Необходимо реализовать возможность кэширования уже загруженных данных: если пользователь закрыл страницу, 
// а потом снова открыл ее, виджет должен отображать все загруженные ранее данные 
// (новые данные должны подгружаться из учетом уже загруженных ранее).
// При переполнении localStorage, данные, загруженные последними должны вытеснять данные загруженные первыми.

// спиннер 
let loading = document.getElementById('loading');
// виджет
let widget = document.getElementById('container');
// post container
let container = document.getElementById('post');
// token 
const token = `d5b0442cd5b0442cd5b0442c35d6a6d183dd5b0d5b0442cb0c48ee624101560805f3752`;
// group 
const group = 69275738;

let posts = [];

// при ошибке вызываем след функцию
function error(error){
    // убираем спиннер
    loading.style.display = 'none';
    // создаем картинку
    let img = document.createElement('img');
    // даем id
    img.id = 'error_img';
    // добавляем ссылку на картинку
    img.src = `https://i.pinimg.com/originals/66/54/3d/66543d2677a8690689385f4956539d62.jpg`;
    // добавляем в DOM
    document.getElementById('title').insertAdjacentElement('afterend', img);   
    throw new Error(error);
}

const loadFromLocalStorage = () => {
    const cache = localStorage.getItem("19");
    let data = JSON.parse(cache);
    return cache ? data : [];
}

const saveToLocalStorage = (data) => {
    localStorage.setItem("19", JSON.stringify(data));
}

const calculateLocalStorage = () => {
    let total = 0;
    // х - один айтем в localStorage
    for (let x in localStorage) {
        // умножаем на 2, так как данные сохранены в `utf-16` формате, который занимает в два раза больше места
        let amount = (localStorage[x].length * 2) / 1024;
        if (amount !== undefined && localStorage.hasOwnProperty(x)) {
            total += amount;
        }
    }
    // возвращаем максимальный объем данных, который можно записать в localStorage Google Chrome (в сотых возвращаем)
    return total.toFixed(2);
}

function callbackFunc(result) {
    let data = result.response.items;
    console.log(data);
    // убираем спиннер
    loading.style.display = 'none';
    let cachedData = loadFromLocalStorage();
    saveToLocalStorage(data);
    if(cachedData.length > 0) {
        loading.style.display = 'none';
        let currentSize = calculateLocalStorage();
        if(currentSize > 8000) {
            cachedData.shift();
            renderPost(cachedData);
        }
        // рендерим виджет с постами 
        renderPost(cachedData);
    } else {
        let info = loadFromLocalStorage();
        renderPost(info);
    }
};

async function apiVk(offset, count) {
    // добавляем ссылку скрипту
    document.getElementById('api').src = `https://api.vk.com/method/wall.get?owner_id=-${group}&offset=${offset}&count=${count}&access_token=${token}&v=5.131&callback=callbackFunc`;
}

async function loadScript(offset, count) {
    try{
        if(document.getElementById('api')) {
            document.getElementById('api').parentNode.removeChild(document.getElementById('api'));
            apiVk(offset, count);
        }
        // создаем скрипт
        let script = document.createElement('SCRIPT');
        // id
        script.id = 'api';
        // добавляем его в DOM
        document.getElementsByTagName('head')[0].appendChild(script);
        apiVk( offset, count);
    } catch(e) {
        error(e);
    }
}

function renderPost(data) {
    let posts = data;
    let content = '';
    widget.style.display = 'block';
    for(let post of posts){
        let imgArr = post.attachments.map((a) => {
            if(a.photo !== undefined && a.photo !== null){
                return a.photo;
            } return 0
        });
        let img = imgArr.map((a) => {
            return `<img class="img" id="${a.id}" src="${a.sizes.map((b) => {return b.url;})}">`;
        }).join(''); // массив в строку
        content += `<li class="post">
            <div class="post__text">${post.text}</div>
            ${
                post.attachments && imgArr?
                    `<div class="post__container__img">
                        ${img}
                    </div>`
                :
            ''
            }
        </li>`;
    }
    container.innerHTML = content;
}

let offset = 0;
let count = 20;

window.addEventListener('DOMContentLoaded', async() => {
    loading.style.display = 'block';
    let data = await loadScript(0, 20);
    if(data){
        loading.style.display = 'none';
        widget.style.display = 'block';
    }
});

// widget.addEventListener('scroll', async function() {
//     const scrolledToBottom = container.scrollHeight - container.clientHeight <= container.scrollTop + 1
//     if(scrolledToBottom) {
//         let cachedData = loadFromLocalStorage();
//         offset += cachedData.length;
//         count += offset;
//         await loadScript(offset, count);
//     }
// });