// Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. 
// Напишите код, который сортирует этот массив по возрастанию возраста, 
// а при равных возрастах сортирует по алфавиту по полю name.

function sortObjects(arr) {
    // проверяем в массиве объекты 
    if(typeof arr !== 'object') {
        console.log('incorrect information, try again');
        return;
    }

    // если массив пустой
    if(arr.length === 0) {
        console.log('empty array');
        return;
    }

    // сортируем массив, если проверку прошел
    let newArr = arr.sort(function(a,b) {
        // сортируем по возрасту
        if(a.age < b.age) {
            return -1;
        } else if(a.age > b.age) {
            return 1;
        }

        // если равные возрасты, сортируем по имени 
        if(a.age === b.age) {
            if(a.name < b.name) {
                return -1;
            } else if(a.name > b.name) {
                return 1;
            } else return 0;
        }

        return 0;
    });

    console.log(newArr);
}

let arr1 = [
    { name: 'John', age: 25 },
    { name: 'Jake', age: 25 },
    { name: 'Maria', age: 28 },
    { name: 'Finn', age: 35 },
    { name: 'Sophie', age: 20 },
    { name: 'Alexa', age: 25 },
];

let arr2 = [
    { name: 'Jay', age: 23 },
    { name: 'Evelyn', age: 52 },
    { name: 'Sabrina', age: 42 },
    { name: 'Lily', age: 25 },
    { name: 'Kate', age: 22 },
    { name: 'Felix', age: 33 },
    { name: 'Max', age: 45 },
];

let arr3 = [];

sortObjects(arr1); // [{ name: 'Sophie', age: 20 },{ name: 'Alexa', age: 25 },{ name: 'Jake', age: 25 },{ name: 'John', age: 25 },{ name: 'Maria', age: 28 },{ name: 'Finn', age: 35 }]
sortObjects(arr2); // [{ name: 'Kate', age: 22 },{ name: 'Jay', age: 23 },{ name: 'Lily', age: 25 },{ name: 'Felix', age: 33 },{ name: 'Sabrina', age: 42 },{ name: 'Max', age: 45 },{ name: 'Evelyn', age: 52 }]
sortObjects(arr3); // empty array
sortObjects(25); // incorrect information, try again
sortObjects('hey'); // incorrect information, try again