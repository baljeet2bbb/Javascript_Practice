//1. map
let numbers = [1,2,3];
let doubleNumbers =  numbers.map((e)=> e*2);
console.log(doubleNumbers);

//F -> C
//(F-32) * (5/9)

let fahTemp = [32,68,86,104,212];

function fahToCel(fah){

    return (fah-32) * (5/9);
}

let celTemp = fahTemp.map(fahToCel);
console.log(celTemp);

//2. Filter
let num = [1,2,3,4,5,6,7,8,9,10];
let evenNum = num.filter((e) => e % 2 === 0);
console.log(evenNum);

let employee = [
    {name: "John", age : 30, gender: "male"},
    {name: "Bob", age : 35, gender: "male"},
    {name: "Lisa", age : 40, gender: "female"},
    {name: "Priya", age : 25, gender: "female"},
    {name: "Peter", age : 55, gender: "male"}
];

let femaleEmpOver30 = employee.filter((emp)=>{
        return emp.gender === "female" && emp.age > 20;  
});

console.log(femaleEmpOver30);

//3. Reduce 
let numb = [1,2,3,4,5];//15
let sum = numb.reduce((acc,num) => acc+num, 0 );//1
//1st Iteration :0+1
//2nd Iteratiob : 1+2 =3
//3rd : 3 +3 =6
//4th : 6 +4 = 10
//5th : 10+5 = 15 
console.log(sum);



//max num in the array 
let top = [10,5,25,8,30,15,100];//30
let maxNum = top.reduce((max,num) => {//max = 10, num = 10
    if(num > max){//5>10 , 25>10 -> 25, 8>25 ->25, 30>25 -> 30 , 15>30 -> 30 
        return num;
    }
    else{
        return max;
    }
}, top[0]);

console.log(maxNum);

//Assignment 1 : min number in the array
let bottom = [10,5,25,8,30,15,25];
let minNum = bottom.reduce((min,num) => {//min = 10, num =10
    if(num<min){//10<10 -> 10, 5<10 -> 5, 5<25 -> 5, 5<8 -> 5, 5<15 -> 5 , 5< 25 -> 5
        return num;
    }
    else{
        return min;
    }
},bottom[0]);

console.log(minNum);

//cart: name,price

let cartItems = [
    {name:"jeans",price:500},
    {name:"Shirt",price:300},
    {name:"Hat",price:200},
    {name:"Shoes",price:600},
    {name:"T-shirt",price:300},
    
];

let totalCost = cartItems.reduce((total, item) => total+item.price, 0);
console.log(totalCost);


