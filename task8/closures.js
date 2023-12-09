// Задача о замыканиях: напишите функцию, 
// которая будет принимать массив функций и возвращать новую функцию, 
// которая вызывает каждую функцию в этом массиве и возвращает массив результатов, 
// полученных после вызова каждой функции.

let functionsArr2 = [
    function(a,b) {
        if(typeof a === 'number' && typeof b === 'number') {
            return a + b;
        } else {
            return 0;
        }
    },
    function(a,b) {
        if(typeof a === 'number' && typeof b === 'number') {
            return a - b;
        } else {
            return 0;
        }
    },
    function(a,b) {
        if(typeof a === 'number' && typeof b === 'number') {
            return a * b;
        } else {
            return 0;
        }
    },
    function (a,b) {
        if(typeof a === 'number' && typeof b === 'number') {
            return Math.floor(a / b);
        } else {
            return 0;
        }
    }
];

function closures(arr) {
    // массив ответов
    let result = [];
    return function callFunc(c,d) {
        // вызываем функции в массиве и пушим результаты в массив ответов
        for(let i=0; i < arr.length; i++) {
            result.push(arr[i](c,d));
        }
        return result;
    }
}

console.log(closures(functionsArr2)(10,5)); // (4) [15, 5, 50, 2]
console.log(closures(functionsArr2)()); // (4) [0, 0, 0, 0]