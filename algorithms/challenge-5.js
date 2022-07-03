function arraySum(arr1, arr2) {
    //let sum = arr1.map((val,idx) => val + arr2[idx])
    //console.log(sum)
    let newArr = []
    for(i = 0; i < arr1.length; i++){
        newArr.push(arr1[i] + arr2[i % arr2.length])

    }
    return newArr
}

module.exports = arraySum
