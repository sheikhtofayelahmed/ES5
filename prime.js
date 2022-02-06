
// var number=9;
// if (number===1) {
//     console.log(number + ' ' + "is not a prime nor composite")
    
// }else if(number>1) {
//     for (let i = 2; i < number; i++) {
//         if (number%i==0) {
//             console.log(number + ' ' +"is not a prime number")
//             break;
//         } else {
//             console.log(number + ' ' +'is a prime number')
            
//         }
        
//     } 
// }else{
//     console.log("enter a positive number")
// }




function primeNumber(firstNum, secondNum) {
  var results=[];
  
  for (let x = firstNum; x < secondNum; x++) {
     const element = x;
     if (element===1) {
        results.push(undefined);
        
     }
    
     else if (element===2) {
        results.push(element);
        
     }
     else if (element===3) {
         results.push(element);   
             
     }
     else if (element>3) {
        for (let y = 2; y < element; y++) {
           var result;
           if (element%y==0) {

           result=undefined;
            break;
              
           }else if (element%y!=0) {
              result=element;
           }
           
        }
        results.push(result);
     }
     
     
  }
  results=results.filter(function(element) {
  return element!==undefined;})
  console.log(results)
  return results;
}
primeNumber(5,1000)


