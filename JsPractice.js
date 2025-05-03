//var : old way
//ES6


//scope: var
//fucntionally/locally + global scope also

var x = 10;
function test(){
    var y = 20;
}

console.log(x);

var pop ="hi js";
function rel(){
    var top = "hello js";
    console.log(top);
}

rel();
console.log(pop);

var browser = "chrome";
var browser = "firefox";
browser ="edge";

console.log(browser);

var g;
g = "Hello world"
console.log(g);

var flag = "Hey baljeet";
var t1 =4;
if(t1>3){
    var flag = "hey tom";
}
console.log(flag);

//let 
//scope: block scope 
//{}

let m = "hey baljeet";
let time = 4;
if(time >3){
    let msg = "hey how are you?";
    console.log(msg);
}
console.log(m);

//
let len = 4;
len = 5;
console.log(len);

//const
const mg = "hey baljeet";
//mg = "hey tom";
console.log(mg);

let days = 7;
//days = 10;
console.log(100 * days);

//const
const p = 10;
console.log(p);

