// Необходимо реализовать простое поле ввода адреса с функцией геокодинга: 
// пользователь вводит данные в поле с помощью одного из геоинформационных сервисов (Яндекс.Карты, ДаДата, GraphHopper), 
// подбирается адрес. Найденные данные должны отображаться в выпадающем списке, из которого можно выбрать подходящее значение.
// Реализовать дебоунсинг и защиту от троттлинга с помощью замыканий.

// отображаем карту

async function initMap(position) {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    let map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: position,

                // Уровень масштабирования
                zoom: 10
            }
        }
    );

    // убираем выпадающий список
    if(document.getElementById('result-list').style.display = 'flex') {
        document.getElementById('result-list').style.display = 'none';
    }

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
}

initMap([37.588144, 55.733842]);

// получаем, что ввели в поле

async function getAddress() {
    let input = document.getElementById('geo-input').value.trim();

    let data;
    // проверяем пустой ли input
    if(input.length > 0) {
        // запускаем функцию с fetch-запросом и получаем реузльтаты
        data = await fetchAddress(input);
        // рендеринг выпадающего списка 
        await renderList(data);
    } else {
        // если input пустой, то скрываем выпадающий список
        document.getElementById('result-list').style.display = 'none';
    }
}

// получаем данные о месте

async function fetchAddress(address) {
    try {
        // получаем данные адреса по api
        const res = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=264a026e-c088-4550-9f6b-514fa6ceec1b&geocode=${address}&format=json`);
        // проверяем, успешно ли fetch прошел
        if(res.ok) {
            // конвертируем результаты
            const response = await res.json();
            const result = response.response.GeoObjectCollection.featureMember;
            // возвращаем результаты
            return result;
        }
    } catch(error) {
        // кидаем ошибку, если fetch-запрос прошел неуспешно
        throw new Error('fetch-запрос прошел неуспешно');
    }
}

// рендеринг выпадающего списка 

async function renderList(data) {
    const answers = data;
    let content = '';
    for(let answer of answers){
        content += `<li class='result__item' onclick='initMap([${answer.GeoObject.Point.pos.replace(/ /ig, ',')}])'>${answer.GeoObject.name}, ${answer.GeoObject.description}</li>
        <div class="hr"></div>`
    }
    // отоборажаем контейнер выпадающего списка
    document.getElementById('result-list').style.display = 'flex';
    // добавляем айтемы в выпадающий список
    document.getElementById('result-list').innerHTML = content;
}

const throttle = (func, delay) => {
    let prev = 0;
    return function (...args) {
        let current = Date.now();
        if((current - prev) >= delay) {
            func(...args);
            prev = current;
        } else {
            setTimeout(() => {
                func(...args);
                prev = Date.now();
            }, delay)
        }
    };
};


document.getElementById('geo-input').addEventListener('input', () => {
    let throttleGeo = throttle(getAddress, 1000);
    throttleGeo();
});
