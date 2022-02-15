
function factorial(i) {
    if (i==1) {
        return 1;
    }
    return i+factorial(--(i));

}
let total=factorial(100)
console.log(total); 