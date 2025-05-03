// function myFunction(msg){
//     console.log("Welcome to apna college");
//     console.log(msg*2);
// }

// myFunction("I love JS");


// //Arrow Functions
// //const functionName = 

// function sum(a,b,){
//     return a+b;
// }


// const constSUM = (a,b)=>{
//     return a+b;
// }
// console.log(constSUM(4,5));

// //mul function
// const constMUL = (a,b)=>{
//     return a*b;
// }

// console.log(constMUL(4,7));

// //

// const printHello= ()=>{
//     console.log("Hello");
// }

// printHello();


//practice set 

// let count = 0; 
// const vowelCount= (str)=>{
//     for(let i=0;i<str.length;i++){
       
//         if(str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u'){
//             console.log(str[i]);
//             count ++;
//         }
//     }
//     console.log(count);
// } 

// console.log(vowelCount("baljeet"));

// Attempt 2 

// function countVowels(str){
//     let count =0;
//     for(const char of str){
//         if(str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u'){
//             count++;
//         }
//     }
//     console.log(count);
// };

// countVowels("abc");



// //
// let arr = ["pune","delhi", "mumbai"];

// arr.forEach((val, index,arr)=>{ // value at each index 
//     console.log(val.toUpperCase(),index,arr);
// });


//Practice 

// let numbers = [1,2,3,4,33,323,2321];
// let calSquare = (num)=>{

//      console.log(num*num);
// };

// //we can pass function or function variable containging the function 
// numbers.forEach(calSquare);


//map

let numbers = [1,2,3,4,33,323,2321];

let newArr = numbers.map((val)=>{
    return val*2;
});

console.log(newArr);

// Filter function
let arr = [1,2,3,4,32,323,2321];

const evenNumbers = arr.filter((val)=>{
    return val > 32;
});





console.log(evenNumbers);

// Reduce function
let arr1 = [1,2,5,4,7,9];

const reduceOP= arr1.reduce((prev, curr)=>{
    return prev > curr ? prev : curr
});

console.log(reduceOP);

//Practice 1 

let marks = [87, 93, 64, 99, 86];

const toppers = marks.filter((top)=>{
    return top >90;
});

console.log(toppers);

//practice 2

const n = 10;

let arr2 = [];

for(let i =1;i<=n;i++){
    arr2[i-1] = i;  //1(0),2(1),3(2),4(3)
}

console.log(arr2);

const sum = arr2.reduce((val1,val2)=>{
    return val1 + val2;
});

console.log(sum);

const factorial = arr2.reduce((val1,val2)=>{
    return val1 * val2;
});

console.log(factorial);
//










