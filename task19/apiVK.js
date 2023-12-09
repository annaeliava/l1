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

const access_token = '';

let posts = [];

async function fetchData() {

}

function renderPost(data) {
    let posts = data;
    let content = '';
    for(let post of posts){
        content += `<li class="widget__posts"></li>`;
    }
    container.innerHTML = content;
}

window.addEventListener('DOMContentLoaded', async() => {
    loading.style.display = 'block';
    let data = await fetchData();
    if(data) {
        loading.style.display = 'none';
        widget.style.display = 'block';
    }
});