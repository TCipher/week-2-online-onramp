function numSwap(number) {
 if(number%2 != 0){
  return false
 }
 let swap = 0;
 let x = 1
 while(number != 0){
  let num1 = number % 10
  num2 = ((number - num1)/10)%10
  swap += x * (10 * num1 + num2)
  number = Math.floor(number/100)
  x *=  100
 }
 return swap
}

module.exports = numSwap
// if(number % 2 != 0){
//   return false
// }
// let swap = 0
// let x = 1
// let num1 = number % 10
// num2 = ((number - num1)/10) % 10
// swap += 10 *(10 * num1 + num2)
// number = (number/100)
// x *= 100