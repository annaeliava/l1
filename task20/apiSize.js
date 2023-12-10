// Реализовать функцию подсчета объема памяти занимаемого данными в LocalStorage для предыдущей задачи. 
// При изменении данных в localStorage в консоль должен выводиться объем занятой памяти / максимальный размер хранилища. 


// насколько заполнена 
const calculateLocalStorage = (str) => {
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
    return str + total.toFixed(2) + " Кб";
};

const getCurrent = () => {
    console.log(calculateLocalStorage("Объем данных задачи 19: "));
}

getCurrent();

const getMax = () => {
    if(confirm('Нажав ok, все данные в localStorage будут удалены. Чтобы предотвратить данное действие, нажмите на "Отмена"')) {
        // удаляем все с localStorage
        localStorage.clear();
        // генирируем ключи для localStorage
        let arrKeys = [];
        let counter = 0;
    
        const getKeys = () => {
            try {
                counter++;
                arrKeys.push('key' + counter); 
                getKeys();
            } catch(e) {
                console.log('resolved'); // resolved
            }
        }
    
        const keys = getKeys();
    
        // заполняем хранилище
        const getMaxLocalStorage = () => {
            for(let i=0; i<arrKeys.length; i++) {
                localStorage.setItem(`arrKeys[${i}]`, 'The localStorage read-only property of the window interface allows you to access a Storage object for the Document\'s origin; the stored data is saved across browser sessions. localStorage is similar to sessionStorage, except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends — that is, when the page is closed. (localStorage data for a document loaded in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.) As with objects, integer keys are automatically converted to strings. localStorage data is specific to the protocol of the document.');
            }
        }
    
        getMaxLocalStorage();
    
        console.log(calculateLocalStorage("Максимальный объем данных: ")); // Максимальный объем данных: 9911.84 Кб
    
        // удаляем все с localStorage
        localStorage.clear();
    } else {
        history.back();
    }
}

getMax();