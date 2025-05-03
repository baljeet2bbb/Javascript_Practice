function largNum(arr){
    let largest = arr[0];
    for(let i =1; i<arr.length;i++){
            if(arr[i]> largest){
                largest = arr[i];
            }
    }
    return largest;
}

console.log(largNum([1,4,65,7,4,3,3,45]));

//or using Math.max() function

function largestNum(arr){
    return Math.max(...arr);
}

 console.log(largestNum([1,3,4,5,6,6,7,7,7,7,5,33,43,432,43,24,4,34,23,432]));


//Remove forst element in array

let arr = [1,1,3,23,3,432,534,5,435,34,5];
arr = arr.slice(9);
console.log(arr);