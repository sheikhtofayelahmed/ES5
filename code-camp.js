function repeatStringNumTimes(str, num) {

  let accumulatedStr = "";
  for (let i = 1; i <=num; i++) {
    accumulatedStr+=str
   
  }
 return accumulatedStr;
}

console.log(repeatStringNumTimes('hyyy', 3))