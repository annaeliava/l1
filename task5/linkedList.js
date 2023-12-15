// Разработайте функцию преобразования JSON в связный список. 
// На входе функция должна получать JSON, содержащий список объектов, 
// на выходе объект, представляющий из себя односвязный список.

let example = [
    {      
        "name": "Футболка UZcotton мужская",
        "color": "белый",
        "size": 56,
        "company": "OOO Вайлдберриз",
        "fullprice": 1051,
        "discountprice": 522,
        "quantity": 1,
        "instock": 3,
        "id": 1
    },
    { 
        "name": "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
        "color": "прозрачный",
        "company": "OOO Мегапрофстиль",
        "fullprice": 11500,
        "discountprice": 10500,
        "quantity": 200,
        "instock": 1000,
        "id": 2
    },
    { 
        "name": "Карандаши цветные Faber-Castell \\\"Замок\\\", набор 24 цвета, заточенные, шестигранные, Faber&#8209;Castell",
        "company": "OOO Вайлдберриз",
        "fullprice": 475,
        "discountprice": 247,
        "quantity": 2,
        "instock": 4,
        "id": 3
    },
];

// конвертировали json в строку
const json = JSON.stringify(example);

class LinkedListNode {
    // передаем next по умолчанию null
    constructor(value, next = null) {
        // текущий элемент
        this.value = value;
        // следующий элемент
        this.next = next;
    }

    // возвращаем текущий элемент строкой
    toString() {
        return `${this.value}`;
    } 
}

class LinkedList {
    constructor() {
        // первый элемент 
        this.head = null;
        // последний элемент
        this.tail = null;
    }

    // добавляем в конец списка новый элемент
    append(value) {
        const newNode = new LinkedListNode(value);

        // создаем первый элемент
        if (!this.head || !this.tail) {
            // первый элемент становить и началом, и концом, так как он один
            this.head = newNode;
            this.tail = newNode;
            // возвращаем текущий список
            return this;
        }

        // если в списке были уже другие элементы, добавляем следущий 
        this.tail.next = newNode;
        // подставляем последний 
        this.tail = newNode;

        return this;
    }
}

const convertJsonToLinkedList = (json) => {
    // проверяем не пустой ли объект или массив
    if (json.length == 0 || json.length === undefined) return 'empty';
    // парсим json
    const list = JSON.parse(json);
    // создаем список
    const linkedList = new LinkedList();
    // передаем value и вызываем append
    list.forEach(obj => linkedList.append(obj));
    // возвращаем список
    return linkedList;
}

console.log(convertJsonToLinkedList(json));
console.log(convertJsonToLinkedList({})); // empty