// let array = ["a","e","i","o","u"]
// function countVowel(str) {
//     let count=0;
//     for (let i = 0; i < str.length; i++) {
//         const letter = str[i];
//         //console.log(element)
        
//         for (let j = 0; j < array.length; j++) {
//             const vowel = array[j];
            
//             //console.log(elements)
//             if (letter==vowel) {
//                count++
//                break;
//             }

//         }
        
//     }
//     console.log(count)
// }
// countVowel('How Are you my friend?'.toLowerCase())



let array = ["a","e","i","o","u"]
function countVowel(str) {
    let count=0;
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        //console.log(element)
        if (array.includes(letter)) {
            count++
        }
        

        }
        console.log(count)
    }
    

countVowel('How Are you my friend?'.toLowerCase())