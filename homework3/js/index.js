// ### Задача 
// Дана переменная `count`. В зависимости от значения переменной
// вывести в консоль слово `товар` в правильной форме.
// Например, 12 товаров, 33 товара, 21 товар и тд

let count = '125';

let end = '';

if (count.endsWith('1')) {
    end = '';
} else if (count.endsWith('2') || count.endsWith('3') || count.endsWith('4')) {
    end = 'а';
} else if (count.endsWith('5') || count.endsWith('6') || count.endsWith('7') || count.endsWith('8')
    || count.endsWith('9') || count.endsWith('0')) {
    end = 'ов';
} else if (count.endsWith('11') || count.endsWith('12') || count.endsWith('13') || count.endsWith('14')
    || count.endsWith('15') || count.endsWith('16') || count.endsWith('17')
    || count.endsWith('18') || count.endsWith('19')) {
    end = 'ов';
}
console.log(`${count} товар${end}`);