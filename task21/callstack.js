// Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность)

// размер коллстэка
let size = 0;

function getCallstackSize() {
    try {
        // добавляем 
        size++;
        // вызываем n раз
        getCallstackSize();
    } catch (error) {
        // возвращаем размер коллстэка
        return size;
    }
}

// инициализация 
let limit = getCallstackSize();

console.log('Размер коллстэк:', size); 

// Chrome => Размер коллстэк: 9181
// Firefox => Размер коллстэк: 21123
// Opera => Размер коллстэк: 9194
// Safari => Размер коллстэк: – 45631