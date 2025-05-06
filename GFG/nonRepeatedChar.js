function nonRepeated(str){
    
    let charCount ={};
    for(let val of str){
        charCount[val] =(charCount[val] || 0) +1;
    }
    
    for(let val of str){
        if(charCount[val] === 1){
            return val;
        }
    }
    return null;
}
console.log(nonRepeated("rrajjat"));