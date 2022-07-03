function arraySum(arr1, arr2) {
    let sum = []
    for(i = 0; i < arr1.length; i++){
        sum.push(arr1[i] + arr2[i % arr2.length])
    }
    return sum
}

module.exports = arraySum
