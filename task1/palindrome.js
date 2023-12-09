// Задача о палиндроме: 
// напишите функцию, которая проверяет, является ли заданная строка палиндромом. 
// Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»).


function isPalindrome(str) {
    // проверяем пустая ли строка
    if(str === null || undefined) {
        console.log(`${str} is not a palindrome`);
        return;
    }

    // убираем лишнее и меняем регистр 
    let newStr = str.replace(/[^a-zA-Zа-яА-Я]/g, '').toLowerCase();

    // проверяем палиндром ли строка 
    for(let i=0; i<newStr.length; i++) {
        if(newStr[i] !== newStr[newStr.length - 1 - i]) {
            console.log(`${str} is not a palindrome`);
            return;
        } else {
            console.log(`${str} is a palindrome!`);
            return;
        }
    }
}

isPalindrome('аргентина манит негра'); // аргентина манит негра is a palindrome!
isPalindrome('madaM'); // madaM is a palindrome!
isPalindrome('hey'); // hey is not a palindrome
isPalindrome('Лёша на полке клопа нашёл'); // Лёша на полке клопа нашёл is a palindrome!
isPalindrome('Искать такси '); // Искать такси  is a palindrome!
isPalindrome('--=1'); // --=1 is not a palindrome