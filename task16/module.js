// Задача на модули и использование внешних библиотек: 
// напишите модуль, который экспортирует функцию для работы с датами. 
// Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.

export function currentDateAndTime() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}

export function showYesterday() {
    return moment().subtract(1, "days").format('MMMM Do YYYY, h:mm:ss a'); 
}