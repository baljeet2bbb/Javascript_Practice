function sortedArray(arr){
    for(let i =0;i<arr.length;i++){
        for(let j =i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                let temp=arr[i];
                arr[i]= arr[j];
                arr[j] = temp;
                
            }
        }
    }
    return arr;
}

console.log(sortedArray([3,34,3,45,65,65,657,657,67,67,76676543435,53533,3,32,342]));