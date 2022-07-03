function missingNumber(numArr) {
    const num = [1,2,3,4,5,6,7,8,9]
    let result = num.filter(x => !numArr.includes(x))
    if(result.length === 1){
        return result[0]
    }else if(result.length > 1){
        return result
    }else{
        return false
    }
    
    }


module.exports = missingNumber
// const num = [1,2,3,4,5,6,7,8,9]
// let result = num.filter(x => !numArr.includes(x))
// if(result.length === 1){
//  return result[0]
// }else if(result.length > 1){
//  return result
// }else{
//  return false
// }
//  }