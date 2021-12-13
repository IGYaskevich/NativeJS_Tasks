// Написать функцию которая принимает число. Логика функции будет следующая

const findSumInteger = (number) => {
    const foundNumber = number.toString().split('').reduce((result, number) => {
        return result + +number
    }, 0).toString()
    return foundNumber.length === 1 ? +foundNumber : findSumInteger(foundNumber)

}
console.log(findSumInteger(16))
console.log(findSumInteger(942))
console.log(findSumInteger(132189))
console.log(findSumInteger(493193))