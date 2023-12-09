// Задача о странных числах: 
// Напишите функцию, которая принимает число и возвращает true, если это число является странным, и false в противном случае. 
// Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.

function sumDividers(num) {
    let sum = 0;
    // высчитываем сумму делителей
    for(let i=1; i<num; i++) {
        if(num % i === 0) {
            sum += i;
        }
    }
    
    // если сумма делителей равна числу, то возвращаем true, а если нет - false
    if(sum === num) {
        console.log(true);
        return;
    } else {
        console.log(false);
        return;
    }
}

function isWeirdNum(number) {
    // проверяем, является ли аргумент числом
    if(typeof number !== 'number') {
        console.log(false);
        return;
    }

    // проверяем, является ли число положительным 
    if(number < 0) {
        console.log(false);
        return;
    }

    // вызываем функцию, которая проверяет, является ли число странным
    sumDividers(number);
}

isWeirdNum(45); // false
isWeirdNum('32'); // false
isWeirdNum('a word'); // false
isWeirdNum(70); // false
isWeirdNum(74); // false
isWeirdNum(6); // true
isWeirdNum(true); // false
isWeirdNum(28); // true 