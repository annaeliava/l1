// Задача о замыканиях и области видимости: 
// напишите функцию, которая возвращает другую функцию. 
// Внутренняя функция должна иметь доступ к переменной, 
// определенной во внешней функции, даже после того, как внешняя функция завершила свое выполнение.

function scopeFunction() {
    let variable = 'hello';

    return function() {
        variable += ' world';
        return variable;
    }
}

console.log(scopeFunction()()); // hello world