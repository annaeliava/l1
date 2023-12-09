// Задача на асинхронность: напишите асинхронную функцию, 
// которая использует ключевое слово await для ожидания выполнения других асинхронных операций, 
// и возвращает результат выполнения.

const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    })
}

async function fetchToDos(data) {
    console.log('Request todos...'); // Request todos...
    try {
        await delay(3000);
        const response = await fetch(data);
        const result = await response.json();
        console.log('ToDos:', result); // ToDos: (200) [{...}, ...]
        console.log('Resolved ToDos'); // Resolved ToDos
        return result; // Promise {<pending>}
    } catch (e) {
        return e;
    }
}

let data = fetchToDos('https://jsonplaceholder.typicode.com/todos');
console.log(data);