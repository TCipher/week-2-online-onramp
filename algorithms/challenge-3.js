function increment(arr, value) {
    let sum = arr.filter(x => x.val += value)
    return sum
}

module.exports = increment

