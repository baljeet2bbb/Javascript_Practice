//1. every();
let num = [1,2,3,4,5,30];
let flag = num.every((e) => e<10);
console.log(flag);

//2. some();
let num1 = [1,2,3,4,5];
let g = num1.some((e)=> e>20 );
console.log(g);


//3. find()
let total = [1,2,3,7,9];
let T = total.find((e)=> e % 2 === 0);
console.log(T);

//4.indexOf
let fruit = ["apple", "banana","mango"];
let f = fruit.indexOf('banana');
console.log(f);

let fruits = ["apple", "banana","mango","apple"];
let index = fruits.lastIndexOf('apple');
console.log(index);

//reverse
let frts = ["apple", "banana","mango","apple"];
let revFrts= frts.reverse();
console.log(revFrts);

//sort 
let products = ["apple", "banana","mango","apple"];
let sortPro = products.sort();
console.log(sortPro);