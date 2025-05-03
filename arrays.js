//Declaration of an array 

let myArray = [];
//let numbers = [1,2,3,4,5];

let lang = ["Java","Javascript","Python"];

//1.Push
lang.push("Ruby","HTML");
console.log(lang);

//2.Pop
let numbers = [1,2,3,4,5];
numbers.pop();
console.log(numbers);

//3.shift 
let fruits = ["apple", "banana","orange"];
let firstFruit = fruits.shift();
console.log(firstFruit);

//4.unshift
let colors = ["red","green","black","white"];
console.log(colors.length);
colors.unshift("blue","pink");
console.log(colors);
console.log(colors.length);

//5. Splice 
let animal = ["dog","cat","bird","fish"];
animal.splice(1,2,"bear","elephant");
console.log(animal);


//6. Slice 
let pop = [1,2,3,4,5];
let newPop = pop.slice(1,4);
console.log(newPop);

//7. Concat
let fr = ["apple", "banana","orange "];
let num = [1,2,3,4];
let mixedArray = num.concat(fr);
console.log(mixedArray);

//8.indexOf:
let color = ["black","red","green","blue","red"];
let indexRed = color.indexOf("red");
console.log(indexRed);
let baljeetIndex = color.indexOf("baljeet");
console.log(baljeetIndex);

//2nd red index:
let redSecondIndex = color.indexOf("red",color.indexOf("red")+1);
console.log(redSecondIndex);

//9.includes:
let test = ["admin","customer","seller","vendor"];
let flag = test.includes("vendor");
console.log(flag);

//10.forEach method 
let n = [1,2,3,4,5,6,7];
n.forEach((e) => {
    console.log(e * 2);
})