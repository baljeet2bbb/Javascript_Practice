function arrayIntersection(arr1, arr2){
    const set2  = new Set(arr2);
    return arr1.filter(val=>set2.has(val));
}
console.log(arrayIntersection([5,6,7], [6,7,8]));
