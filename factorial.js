//function
// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }
//   console.log(factorialize(5));


  //loop
function factorial(number) {
    var fact=1;
    for (let i = 1; i <=number; i++) {
        fact=fact*i;
        
    }
    return fact

}
console.log(factorial(6))