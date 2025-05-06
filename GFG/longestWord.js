function longestWord(arr){
    let longWord = '';
    const words = arr.split(' ');
    console.log(words);
    for(let val of words){
      
        if(val.length > longWord.length){
            longWord = val;
        }
    }
    return longWord;
}

console.log(longestWord("India is my country"));