
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




function getPrime(min, max) {
  var results=[];
  
  for (let x = min; x < max; x++) {
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
        for (let y = 2; y <= element/2; y++) {
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
getPrime(1,100)




// function getPrime(min,max) {
//    for (let i = min; i < max; i++) {
//       isPrime=1;
//       for (let j = min; j <= i/2; j++) {
//          if (i%j==0) {
//             isPrime=0
//             break
//          }

         
//       }
//       if (isPrime==1) {
//          console.log(i)
//       }
      
//    }
   
// }
// getPrime(5,500)