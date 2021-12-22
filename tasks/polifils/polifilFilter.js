Array.prototype.customFilter = function (callback) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result
}

const arr = [1, 2, 3, 4, 5]

console.log(arr.customFilter(item => item > 2))