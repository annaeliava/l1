// Задача о коллекции функций: у вас есть массив функций, 
// напишите код, который вызовет каждую функцию в этом массиве и выведет их порядковый номер. 
// Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.
// Другим выполнить следующие шаги:
// Вызвать первую функцию из массива.
// После завершения работы первой функции вызвать вторую функцию.
// После завершения работы второй функции вызвать третью функцию.
// И так далее, пока все функции в массиве не будут вызваны по порядку.

let functionsArr = [
    async function(v) {
        return new Promise(resolve => {
            // вызываем функцию спустя 5 секунд
            setTimeout(() => {
                console.log(v);
                resolve();
            }, '5000');
        });
    },
    function(v) {
        // отображается, когда прошлая функция завершится
        console.log(v);
    },
    async function(v) {
        return new Promise(resolve => {
            // вызываем функцию спустя 1 секунду
            setTimeout(() => {
                console.log(v);
                resolve();
            }, '1000');
        });
    },
    function(v) {
        // отображается, когда все завершатся
        console.log(v);
    }
];

async function callAllFunctions(arr) {
    // проверяем, является ли аргумент массивом 
    if(!Array.isArray(arr)) {
        console.log('not array');
        return;
    }

    for(let i=0; i<arr.length; i++) {
        // проверяем, является ли arr массивом функции 
        if(typeof arr[i] === 'function') {
            // вызываем функции по порядку
            await arr[i](`function #${i+1} is called`);
        } else {
            console.log('accept only array of functions');
        }
    }
}

callAllFunctions(functionsArr);
// function #1 is called
// function #2 is called
// function #3 is called
// function #4 is called
