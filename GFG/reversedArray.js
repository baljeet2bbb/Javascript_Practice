function reversedArray(arr){
    let reversed = [];
    for(let i = arr.length-1;i>=0;i--){
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reversedArray([1,2,3,4,5,6,7,8,9,10]));
