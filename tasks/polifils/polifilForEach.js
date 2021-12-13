const listNumbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19,]
listNumbers[25] = 25


Array.prototype.forEach2 = function (callback, thisArg) {
    if (this === null) throw new Error(`Cant iterate iver undefined or null`)
    if (typeof callback !== 'function') throw new Error(`not a function`)

    const listItem = Object(this)
    const listLength = listItem.length
    let context = this
    let i = 0

    if (arguments.length > 1) context = thisArg

    for (i; i < listLength; i++) {
        if (i in listItem) {
            callback.call(context, this[i], i, listItem)
        }
    }
    for (i; i < listLength; i++) {
        callback(context[i], i, listItem)
    }
}

listNumbers.forEach2((item, index, array) => {
    console.log({item, index})
})