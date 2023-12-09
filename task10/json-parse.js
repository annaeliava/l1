// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

let exampleJSON2 = [
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
        "name": "Карандаши цветные Faber-Castell \"Замок\", набор 24 цвета, заточенные, шестигранные, Faber&#8209;Castell",
        "company": "OOO Вайлдберриз",
        "fullprice": 475,
        "discountprice": 247,
        "quantity": 2,
        "instock": 4,
        "id": 3
    },
];

let exampleObj2 = { name: 'John', age: 25 };

// конвертируем аргумент в строку
const stringify = (smth) => {
    let result = JSON.stringify(smth);
    return result;
}

let exampleJSON2Stringified = stringify(exampleJSON2);

let exampleObj2Stringified = stringify(exampleObj2);

function convertStringToJs(str) {
    // текущая позиция в строке
    let index = 0;

    function parseValue() {
        let currentChar = str[index];

        if(currentChar === '[') {
            return parseArray();
        } else if(currentChar === '{') {
            return parseObject();
        } else if(currentChar === '"' || currentChar === "'") {
            return parseString();
        } else if(currentChar === '-' || (currentChar >= 0 && currentChar <= 9)) {
            return parseNumber();
        } else if (currentChar === 't' || currentChar === 'f') {
            return parseBoolean();
        } else if (currentChar === 'n') {
            index += 4; // пропускаем 'null'
            return null;
        }
    }

    function parseArray() {
        index++; // пропускаем '['
    
        let arr = [];
    
        while(str[index] !== ']') {
            let value = parseValue();
    
            arr.push(value);
    
            if(str[index] === ",") {
                index++; // пропускаем запятую
            }
        }
        index++; // пропускаем ']'
        return arr;
    }
    
    function parseObject() {
        index++; // пропускаем '{'
    
        let obj = {};
    
        while(str[index] !== '}') {
            let key = parseString();
            index++;
            let value = parseValue();
            obj[key] = value;
    
            if (str[index] === ',') {
                index++; // пропускаем запятую
            }
        }
    
        index++;
        return obj;
    }
    
    function parseString() {
        index++; // пропускаем '"';
    
        let string = '';
    
        while(str[index] !== '"' && str[index] !== "'") {
            if(str[index] === '\\' && (str[index + 1] === '"' || str[index + 1] === "'")) { // if includes '\\"'
                string += str[index + 1];
                index += 2;
            } else {
                string += str[index];
                index++;
            }
        }
    
        index++; // пропускаем '"'
        return string;
    }
    
    function parseNumber() {
        let numStr = '';
    
        while (
            str[index] === '-' || 
            str[index] === '.' || 
            (str[index] >= '0' && str[index] <= '9')
        ) {
            numStr += str[index];
            index++;
        }
        // возвращает десятичное число
        return parseFloat(numStr);
    }
    
    function parseBoolean() {
        if(str[index] === 't') {
            index += 4;
            return true;
        } else {
            index += 5;
            return false;
        }
    }

    return parseValue();
}

console.log(convertStringToJs(exampleJSON2Stringified)); // (3) [{…}, {…}, {…}]
console.log(convertStringToJs(exampleObj2Stringified)); // {name: 'John', age: 25}