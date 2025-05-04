function unionArray(arr1, arr2){
    return [...new Set([...arr1,...arr2])];
}
unionArray([5,6,7],[7,8,9]);