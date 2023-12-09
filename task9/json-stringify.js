// Реализовать функцию конвертации JSON в строку

let exampleArr = [
    {      
        name: "Футболка UZcotton мужская",
        color: "белый",
        size: 56,
        company: "OOO Вайлдберриз",
        fullprice: 1051,
        discountprice: 522,
        quantity: 1,
        instock: 3,
        id: 1
    },
    { 
        name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
        color: "прозрачный",
        company: "OOO Мегапрофстиль",
        fullprice: 11500,
        discountprice: 10500,
        quantity: 200,
        instock: 1000,
        id: 2
    },
    { 
        name: "Карандаши цветные Faber-Castell 'Замок', набор 24 цвета, заточенные, шестигранные, Faber&#8209;Castell",
        company: "OOO Вайлдберриз",
        fullprice: 475,
        discountprice: 247,
        quantity: 2,
        instock: 4,
        id: 3
    },
];

let exampleObject = { name: 'John', age: 25 };

function convertJsonToString(data) {
    // возрварщаем null, если data - null, undefined or symbol
    if(typeof data === 'null' || typeof data === 'undefined' || typeof data === 'symbol') {
        return null;
    } else if(typeof data === 'string') {
        return `"${data}"`; // если data является строкой, возвращаем строку
    } else if(typeof data === 'number') {
        return "" + data; // если data является числом, возвращаем строку
    } else if(typeof data === 'boolean') {
        return "" + data; // если data является boolean, возвращаем строку
    } else if(typeof data === 'function') {
        return; // если data является функцией, опускаем 
    }

    if(Array.isArray(data)) {
        let arrValues = data.map((v) => convertJsonToString(v)); // конвертируем все элементы в массиве
        return `[${arrValues.join(",")}]`;
    }

    if(typeof data === 'object') {
        let objValues = [];
        for(let key in data) {
            if(data.hasOwnProperty(key)) {
                let value = convertJsonToString(data[key]); // конвертируем все элементы в объекте
                objValues.push(`"${key}"` + ":" + value); 
            }
        }
        return `{${objValues.join(',')}}`;
    }
}


console.log(convertJsonToString(exampleArr)); // [{"name":"Футболка UZcotton мужская","color":"белый","size":56,"company":"OOO Вайлдберриз","fullprice":1051,"discountprice":522,"quantity":1,"instock":3,"id":1},{"name":"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe","color":"прозрачный","company":"OOO Мегапрофстиль","fullprice":11500,"discountprice":10500,"quantity":200,"instock":1000,"id":2},{"name":"Карандаши цветные Faber-Castell \"Замок\", набор 24 цвета, заточенные, шестигранные, Faber&#8209;Castell","company":"OOO Вайлдберриз","fullprice":475,"discountprice":247,"quantity":2,"instock":4,"id":3}]
console.log(convertJsonToString(undefined)); // null
console.log(convertJsonToString(2)); // 2
console.log(convertJsonToString('hello')); // "hello"
console.log(convertJsonToString(true)); // true
console.log(convertJsonToString(exampleObject)); // {"name":"John","age":25}

console.log(JSON.stringify(exampleArr) === convertJsonToString(exampleArr)); // true
console.log(JSON.stringify(exampleObject) === convertJsonToString(exampleObject)); // true