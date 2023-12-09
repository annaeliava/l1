// Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
// вычисление N-го числа в ряду Фибоначчи 
// вычисление всех чисел в ряду Фибоначчи до числа N
// вычисление N-го просто числа
// вычисление всех простых чисел до числа N

const MathX = {

    // вычисление N-го числа в ряду Фибоначчи 

    nthFib(n){
        // если не число 
        if(typeof n !== 'number') {
            return 'type number';
        }

        let prev = 0, next = 1;
        for(let i = 0; i < n; i++){
            let temp = next;
            next = prev + next;
            prev = temp;
        }
        return prev;
    }, 

    // вычисление всех чисел в ряду Фибоначчи до числа N

    fib(n) {
        // если не число 
        if(typeof n !== 'number') {
            console.log('type number')
            return;
        }

        // первые два числа 
        let fibonacci = [0, 1]; 

        for (i = 2; i < n; i ++) {
            // сумма двух предыдущих чисел
            fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
        }

        return fibonacci;
    },

    // проверяем, является ли число простым

    isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num !== 1;
    },

    // вычисление N-го просто числа

    nthPrime(n) {
        // если не число
        if(typeof n !== 'number') {
            console.log('type number')
            return;
        }

        // получаем простые числа
        let row = this.prime(n);

        let result = row[row.length -1];
        return result;
    },

    // вычисление всех простых чисел до числа N

    prime(n) {
        // если не число
        if(typeof n !== 'number') {
            console.log('type number')
            return;
        }

        let primeNum = [];

        for (let i = 2; i <= n; i++) {
            if (this.isPrime(i)) primeNum.push(i);
        }

        return primeNum;
    }
}

console.log(MathX.nthFib(3)); // 2
console.log(MathX.nthFib('')); // type number
console.log(MathX.nthFib(7)); // 13
console.log(MathX.fib(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(MathX.nthPrime(20)); // 19 
console.log(MathX.prime(10)); // [2, 3, 5, 7]
console.log(MathX.prime(13)); // [2, 3, 5, 7, 11, 13]