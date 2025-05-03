let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
for(let i=0;i<arr.length;i++){
    sum = sum + arr[i];
}
console.log(sum);
//or using reduce method
let sum1 = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum1);

