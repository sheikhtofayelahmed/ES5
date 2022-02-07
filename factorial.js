//function
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  console.log(factorialize(5));


 


let factorial=1;
for (let i = 5; i >=1; i--) {
    factorial=factorial*i;
    
}
console.log(factorial)


//recursion

function factorial(i) {
    if (i==1) {
        return 1;
    }
    return i*factorial(--i);

}
console.log(factorial(6));