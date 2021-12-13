const listNumbers = [1, 2, 3, 4, 5]

Array.prototype.map2 = function (callback, thisArg) {
    if (this === null) throw new Error(`Cant iterate iver undefined or null`)
    if (typeof callback !== 'function') throw new Error(`not a function`)

    const result = []
    const listItem = Object(this)
    const length = listItem.length
    let context = this

    if (arguments.length > 1) context = thisArg

    for (let i = 0; i < length; i++) {
        if (i in listItem) {
            result[i] = callback.call(context, context[i], i, listItem)
        }
    }
    return result
}

console.log('Example1:', listNumbers.map2((number) => number * 2))
console.log('Example2:', listNumbers.map2((number) => number + 1))