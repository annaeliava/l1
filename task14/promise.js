// Задача на промисы: напишите функцию, 
// которая принимает URL изображения и возвращает промис, 
// который разрешается с данными об изображении, когда оно загружено. 
// Когда говорится "промис разрешается с данными об изображении", 
// это означает, что промис должен быть успешно выполнен (resolved) с данными об изображении после того, как изображение будет загружено.

console.log('Request data...'); // Request data...

function loadImage(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(url){
                console.log('Preparing data...'); // Preparing data...
                resolve(url);
            } else {
                reject(url); // если не передали картинку
            }
        }, 1000);
    });
}

loadImage('https://i.pinimg.com/originals/f4/69/c8/f469c86e1ca76d49aab7d56b696f3d06.jpg')
    .then((img) => {
        setTimeout(() => {
            console.log('Resolved', img); // Resolved https://i.pinimg.com/originals/f4/69/c8/f469c86e1ca76d49aab7d56b696f3d06.jpg
        }, 2000 );
    })
    .catch((error) => {
        console.log('Not resolved', error);
    })