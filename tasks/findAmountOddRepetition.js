// Функция принимает массив чисел, где есть единственное число, которое встречается нечётное количество раз.
// Результатом этой функции должно быть найденное число

const findAmountOddRepetition = (numbersList) => {
    const numbersMeetingsMap = numbersList.reduce((result, number) => {
        result[number] = (result[number] || 0) + 1
        return result
    }, {})
    return +Object.keys(numbersMeetingsMap).reduce((result, key) => {
        return key % 2 === 0 ? key : result
    })
}

console.log(findAmountOddRepetition([7]))
console.log(findAmountOddRepetition([0]))
console.log(findAmountOddRepetition([1, 1, 2]))
console.log(findAmountOddRepetition([0, 1, 0, 1, 0]))
console.log(findAmountOddRepetition([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))