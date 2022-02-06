// const names=['abul','abul','jabul','jabul','kalam','salam'];
// function duplicateNames(name) {
//     let unique=[name[0]];
//     for (let i = 0; i < name.length; i++) {
//         const element = name[i];
//         if (unique.indexOf(element)==-1) {
//             unique.push(element);
//         }
//     }return unique;
// }
// console.log(duplicateNames(names))


const names=['abul','abul','jabul','jabul','kalam','salam'];
function duplicateNames(name) {
    let unique=[name[0]];
    for (const element of name) {
        
        if (unique.indexOf(element)==-1) {
            unique.push(element);
        }
    }return unique;
}
console.log(duplicateNames(names))
