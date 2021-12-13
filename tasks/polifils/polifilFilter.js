const listNumbers = [4, 6, 8, 9, 12, 53, -17, 2, 5, 31, 7, 97, -1, 17]

Array.prototype.filter2 = function (callback, thisArg) {
    if (this === null) throw new Error(`Cant iterate iver undefined or null`)
    if (typeof callback !== 'function') throw new Error(`not a function`)

    const result = []
    const listItem = Object(this)
    const length = listItem.length
    let context = this

    if (arguments.length > 1) context = thisArg

    for (let i = 0; i < length; i++) {
        if (i in listItem) {
            const currentItem = context[i]
            if (callback.call(context, currentItem, i, listItem)) {
                result.push(currentItem)
            }
        }
    }
    return result
}

const filteredListNumber = listNumbers.filter2(number => number % 2 === 0)

console.log(filteredListNumber)