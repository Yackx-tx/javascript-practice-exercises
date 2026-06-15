function getLongestWord(sentence) {
    let words = sentence.split(" ");
    let longWords = "";

    for(let i = 0; i < words.length; i++) {
        if( words[i].length > longWords.length ) {
            longWords = words[i];
        }
    }
    return longWords;
}
console.log(getLongestWord('I think i read the interesting book yesterday.'));
