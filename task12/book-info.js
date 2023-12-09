// Задача на работу с объектами: 
// создайте объект, представляющий собой книгу. 
// Объект должен иметь свойства, такие как: 
// название книги, автор и год издания. 
// Напишите методы для получения и изменения значений свойств книги.

let book = {
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    year: 1866
};

// метод для получения значений свойств книги

function getBook() {
    let result = '';

    let title = book.title;
    let author = book.author;
    let year = book.year;

    result += `${`Произведение: "${title}", ` + "автор: " + author + ", год: " + year}`;
    return result;
}

console.log(getBook()); // Произведение: "Преступление и наказание", автор: Фёдор Достоевский, год: 1866
console.log(book); // {title: 'Преступление и наказание', author: 'Фёдор Достоевский', year: 1866}

// метод для изменения значений свойств книги

function changeBook(arg1, arg2, arg3) {
    if(arguments.length === 3) { // меняет все
        book.title = arg1;
        book.author = arg2;
        book.year = arg3;
        return book;
    } else if(typeof arguments[0] === "number") { // меняет год
        book.year = arguments[0];
        return book;
    } else if(arguments.length === 2 && typeof arguments[1] === 'number') { // меняет название и год
        book.title = arguments[0];
        book.year = arguments[1];
        return book;
    } else if(arguments.length === 2) { // меняется название и автора
        book.title = arguments[0];
        book.author = arguments[1];
        return book;
    } else if(arguments[0]) { // меняет название
        book.title = arguments[0];
        return book;
    } else {
        return 'no changes';
    }
}

console.log(changeBook("Бесы", 1872)); // {title: 'Бесы', author: 'Фёдор Достоевский', year: 1872}
console.log(changeBook('Dracula', 'Bram Stoker', 1897)); // {title: 'Dracula', author: 'Bram Stoker', year: 1897}