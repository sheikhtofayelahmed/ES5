//largest number of arrays
let array=[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
let targetArray=new Array();
for (let x = 0; x < array.length; x++) {
  for (let y = 0; y < array[x].length; y++) {
    targetArray.push(array[x][y]);
    
  }
}
function largestArray(arr) {
  let largestArr=0;//number //can be an array
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (largestArr<element) {
      largestArr=element;
    }
  }
  
}
largestArray(targetArray)

//array of largest number
function largestOfFour(array) {
    let results=[]
    for (let x = 0; x < array.length; x++) {
      let element = array[x][0];
      for (let y = 0; y < array[x].length; y++) {
        let arr = array[x][y];
        if (element<arr) {
          element=arr;
        }
      }
      results[x]=element;
    }
    
    //return results
    console.log(results)
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])