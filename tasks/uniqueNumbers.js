// Функция принимает массив чисел. Возвращает массив уникальных чисел

const numbers = [1, 1, 1, 2, 2, 2, 3, 4, 5, 5, 6]
const uniqueNumbersList = (numbersList) => [...new Set(numbersList)]

console.log(uniqueNumbersList(numbers))