function increment(arr, value) {
    let result = arr.filter(x => x.val += value)
    return result
   
}

module.exports = increment

