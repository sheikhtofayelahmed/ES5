
function findLongestWordLength(str){
    let words=str.split(" ")
    let wordsLength=0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length>wordsLength) {
            wordsLength=words[i].length;
        }
    }
    return wordsLength;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog")


