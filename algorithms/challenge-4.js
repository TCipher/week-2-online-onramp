function withdraw(amount) {
   let a1 = Math.floor(amount/100)
   let a2 = Math.floor((amount - (a1 * 100))/50)
   let a3 = Math.floor((amount - ((a1 * 100) + (a2*50)))/20)

   return [a1,a2,a3]
   
}

module.exports = withdraw
//withdraw(370)