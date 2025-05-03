let name = "Baljeet"
console.log(name[0]); // 7
console.log(name[1]); // 7

//Template literals uses backticks
// instead of single or double quotes
// Template literals allow for multi-line strings and string interpolation
// (embedding variables and expressions into strings).
// Template literals are enclosed by backticks (``) instead of single or double quotes.
// They can contain placeholders, which are indicated by the dollar sign and curly braces (${expression}).
// The expressions in the placeholders are evaluated and then inserted into the string. 
// The syntax for template literals is as follows:
// `string text ${expression} string text`


let boy1 = "Pramod";
let boy2 = "Nikhil";

let sentence = `${boy1} is a friend of ${boy2}`;
console.log(sentence); // Pramod is a friend of Nikhil


//problem 3
word = "BALJEET";
console.log(word.toLowerCase());

//problem 4
let str2 = "Please give Rs.1000";
let amount =str2.slice("Please give Rs.".length);
amount = amount.trim(); // remove leading and trailing whitespace
amount = parseInt(amount); // convert string to number
console.log(amount); 

//problem 5
let friend = "Nikhil";
friend[3] = "a"; // This will not work because strings are immutable in JavaScript
console.log(friend); // Nikhil



