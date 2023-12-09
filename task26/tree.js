// Задача: Рекурсивный обход дерева DOM: 
// Напишите функцию, которая рекурсивно обходит дерево DOM, 
// начиная с указанного элемента, и выполняет определенное действие с каждым узлом 
// (например, выводить информацию о теге в консоль).

// высчитываем кол-во вложенных элементов

// считаем элементы
const counter = () => {
    // создаем объект, хранящий результаты счетчика
	let amount = {};
	return (tagName) => {
        // если тэг попадается в первый раз, присваиваем ему 1, если нет, то добавляем в счетчик
        amount[tagName]
            ? amount[tagName] += 1
            : amount[tagName] = 1;
        return amount;   
    }
}

// инициализируем счетчик
let count = counter();

const getChildren = (elem) => {
    // массив дочерних элементов
    const children = [...elem.children];
    // будут хранится результаты тут
    let result;
    if (children.length > 0) {
        children.map(el => {
            // запускаем счетчик и передаем в качестве аргумента тэг текущего элемента
            result = count(el.tagName);
            // если есть вложенные элементы, вызываем снова функцию
            if (el.children.length > 0) {
                getChildren(el);
            } 
        });
    }
    return result;
}

let el = document.getElementById('menu');

// высчитываем кол-во вложенных элементов у тэга ul с id menu
console.log(getChildren(el));