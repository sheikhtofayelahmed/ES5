let number=[1,25,2,4,5,68,-5,-8,75,0,12,35,45,85,-5,-6];
function positiveInt(array) {
    let arr=[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element>=0) {
            
            arr[i]=element;
            
        }else{
            break;
        }
    }
    return arr;
}
console.log(positiveInt(number))