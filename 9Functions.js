//
function add(a,b){
    return a+b;
}

const sum = add(5,6);
console.log(sum);

function print(){
    console.log("Yo yo js singh")
}

print();

//3. Function expression: Anonymous function
const multiply = function(x,y){
    return x* y;

}

let val = multiply(5,6);
console.log(val);


//Arrow Function expression; no function name, anonymous function
const divide = (t1, t2) => t1/t2;
let div = divide(20,5);
console.log(div);


//4. Function Constructor:
const substract = new Function('a','b','return a-b;');
const subs = substract(10,2);
console.log(subs);

//5. IIFE(Immediately Invoke Function Expression):
(function (){
    console.log("Server is up and running in port : 3306");
})();

//6.Generator Function:
//function and yield
function* generateNumbersSequence(){
    yield 1 ;
    yield 2;
    yield 3;
    yield 4;

}

const generator = generateNumbersSequence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);


//7. Anonymous Function
//no specific name 
const numbers = [1,2,3,4,5];
const squareNumbers = numbers.map(function(e){
    return e*e;
});
console.log(squareNumbers);


//8. Recursuve Function
function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

console.log(factorial(100));


//9. Higher Order Function
function addition(a,b){
    return a+b;
}

function multiplicaiton(a,b){
    return a*b;
}

function operate(funcName, a,b){
    funcName(a,b);
}

const s = operate(multiplicaiton,10,23);
console.log(s);