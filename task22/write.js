// Посчитайте сколько раз можно вызвать функцию document.write() внутри document.write(). Объясните результат

let counter = 0;

function callFunc() {
    document.write();
    counter++;
    callFunc();
}

try{
    callFunc();
} catch(e) {
    console.log(counter); // 9181
}

// когда HTML загрузился, и браузер полностью построил DOM, документ становится «закрытым». 
// Попытка дописать что-то в закрытый документ открывает его заново. 
// При этом все текущее содержимое удаляется