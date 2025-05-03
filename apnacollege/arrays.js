let heroes = ["ironman","batman","spiderman","hulk","thor","captain america","antman","deadpool"];

// //for loop
// for(let idx =0;idx<heroes.length;idx++){
//     console.log(heroes[idx]);
// }

//for of
// for(let hero of heroes){
//     console.log(hero);
// } 

//array of cities
// let cities = ["delhi","mumbai","hyderabad","pune","gurgaon"];

// for (let city of cities){
//     console.log(city.toUpperCase());
// }

//using normal for loop
// let marks = [10,40,50,60,70,80,90];

// let sum=0;

// for (let i=0;i<marks.length;i++){
//     sum += marks[i];
//     //console.log(sum);
// }

// const avg = sum/marks.length;
// console.log(`avg marks of class is ${avg}`);


// //using for of loop
// let marks1 = [10,40,50,60,70,80,90];
// let total =0;

// for(let val of marks){
//     total +=val;
// }

// let avg1 = sum /marks1.length;
// console.log(`avg marks of class is ${avg1}`);

//practice 2

let arr = [100, 300, 500, 600,800, 900];

let i =0;
for(let val of arr){
    //console.log(`The value at ${idx} is ${val}`);
    let offer = val/10;
    val = val - offer;
    console.log(`Val after offer is ${val}`);
    arr[i]= val;
    i++;
}






