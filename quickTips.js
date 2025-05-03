//1. find unique values from the array 
const array = [1,2,3,4,5,6,7,2,3,5,7,6,3,9];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);


//2. int to string:
const num = 32;
const numStr = num + '';
console.log(numStr+10);

//
const numStr1 = String(num);
console.log(numStr1+10); 

//3. Float to Integer
const floatNum = 3.76;
const intNum = parseInt(floatNum);
console.log(intNum);

//check if a variable is a Number:
const value = '23r5217' ;
if(typeof value === 'number' && !isNaN(value)){
    console.log(value + ' is a number');
}
else{
    console.log("Not a number");
}

//5. Swap Variable values:
let a = 5;
let b = 10;
[a,b] = [b,a];
console.log(a,b);

//6. check if an object has a property:
const person = {
    name: 'John',
    age: 28,
}

if(person.hasOwnProperty('address')){
    console.log("Person has property");
}
else{
    console.log("Property doesn't exist");
}

//Remove falsy values from the array: {false, 0, ,'',null,undefined, NaN };
const values = [0,1,false, 2, '', 3, undefined, NaN, 4];
const newValue = values.filter(Boolean);
console.log(newValue);

//8. String --> Uppercase and Lowercase
const str = "Naveen Automation Labs";
str1  = str.toUpperCase();
str2 = str.toLowerCase();
console.log(str1, str2);

//9. check if array contains a value 
const lang = ['java','js','python','ruby'];
if(lang.includes('java')){
    console.log("found");
}

//10. check if array is empty
const empty = [];
if(empty.length === 0){
    console.log("array is empty");
}

//11. generate a random number 
const min = 10;
const max = 10;
const randomNumber = Math.floor(Math.random() * (max-min+1))+ min;
console.log(`Random Number : ${randomNumber}`);

//12. String to number:
const strNumber = '32.0';
const x1 = parseFloat(strNumber);
console.log(x1);

//13. Join array elements in the String:
const words = ["Hello"," Baljeet"];
const sentence = words.join(' Bye');
console.log(sentence);

//14. get object property:
const user = {
    name : 'Baljeet',
    age : 25,
    dob: '01-01-1995'
};

console.log(user['name']);
console.log(user['dob']);

//15. clone an array or object:
const marks = [10,20,30,40, 50, 60, 70];
const marksDuplicate = [...marks];
console.log(marksDuplicate);
const userDuplicate = {...user};
console.log(userDuplicate);

//convert object to array
const employee = {
    name: 'Tom',
    age: 25,
    dob: '01-01-1994'
};

//a. keys array :
const keysArray = Object.keys(employee);
console.log(keysArray);

//b. values array:
const valuesArray = Object.values(employee);
console.log(valuesArray);

//c. Key-Values Array:
const  keyValArray = Object.entries(employee);
console.log(keyValArray);


//17. get current date and time 
const currentDate = new Date();
console.log(currentDate.toLocaleString());

//18.check variable is defined:
let i;
if(typeof i === 'undefined'){
    console.log("variable is not defined");
}

//19.truncate an array:
const testing = [0,1,2,3,4,5,6,7,8,9];
testing.length = 3;
console.log(testing);

//20. Last item in array:
const pop = [0,1,2,34,5,6,7];
const n1 = pop.slice(-1);
console.log(n1);