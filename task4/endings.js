// Разработать функцию, изменяющую окончание слов в зависимости от падежа. Например:
// 112 сообщения
// 12 сообщений
// 1 сообщение
// 1024 пользователя
// 1026 пользователей
// 121 пользователь
// Функцию надо упаковать в модуль.

export function wordEndings(n, forms) {
    // проверяем n & forms
    if(typeof n !== 'number') {
        console.log('type number');
        return;
    }

    if(forms.length !== 3) {
        console.log('incorrect forms');
        return;
    }
    
    // последние две цифры
    let lastDigits = Number(n.toString().slice(-2));

    // последняя цифра
    let lastDigit = Number(n.toString().slice(-1));

    if(lastDigit === 1) {
        console.log(`${n} ${forms[0]}`); // им п в ед ч
        return;
    } else if(lastDigits < 21 && lastDigits > 4) {
        console.log(`${n} ${forms[2]}`); // р п во мн ч
        return;
    } else {
        console.log(`${n} ${forms[1]}`); // р п в ед ч
        return;
    }
}