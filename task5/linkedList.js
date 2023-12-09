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

// convert json to string

const json = JSON.stringify(example);

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append = (value) => {
        const newNode = {
            value: value,
            next: null,
        };

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
    
            return this;
        }

        this.tail.next = newNode;
        
        this.tail = newNode;
    }

    getList = () => {
        return this.head;
    }
}

const convertJsonToLinkedList = (json) => {
    const list = JSON.parse(json);
    
    const linkedList = new LinkedList();

    if (!(Array.isArray(list) && list.length > 0)) return 'not an array was passed or the array is empty'

    list.forEach(obj => linkedList.append(obj));

    return linkedList.getList();
}

console.log(convertJsonToLinkedList(json));