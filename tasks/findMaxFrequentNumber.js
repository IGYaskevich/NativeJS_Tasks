const numbers = [1, 3, 3, 3, 4, 5, 1, 1, 3, 7, 7, 7, 7, 7, 7, 7, 12, 12, 7]

const findMaxFrequentNumber = (numbersList) => {
    const numbersMeetingsMap = numbersList.reduce((result, number) => {
        result[number] = (result[number] || 0) + 1
        return result
    }, {})
    return +Object.keys(numbersMeetingsMap).reduce((result, key) => {
        return numbersMeetingsMap[result] > numbersMeetingsMap[key] ? result : key
    })
}
console.log('findMaxFrequentNumber:', findMaxFrequentNumber(numbers))
