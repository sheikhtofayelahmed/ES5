var sentence=" I am a student of class ten";
let count=0;
for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter="a") {
        count++
    }

}
console.log(count);