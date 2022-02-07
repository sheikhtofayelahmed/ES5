var fiboSeries=[0,1]
function fibonacci(number) {
    for (let i = 2/*third index*/; i <= number; i++) { 
        
        fiboSeries[i]=fiboSeries[i-1]+fiboSeries[i-2];
    }
    return fiboSeries;
}
console.log(fibonacci(6));





