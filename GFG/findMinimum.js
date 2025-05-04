function findMin(arr){
    let min = arr[0];
    for(let val of arr){
        if(min > val){
            temp = min;
            min= val;
            val = temp;
        }
    }
    return min;
}
console.log(findMin([1566,244,466,234,5534,354,4545,45,56,56,445,448,565,556,56,56]));