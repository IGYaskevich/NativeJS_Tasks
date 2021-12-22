Array.prototype.customMap = function (callback) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        const newItem = callback(this[i], i, this)
        result.push(newItem)
    }
    return result
}

const arr = [1, 2, 3, 4, 5]

const newArr = arr.customMap((item, index, arr) => item + 1)
