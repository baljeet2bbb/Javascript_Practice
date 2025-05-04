let num1=0, num2=1, nextNum;
let n=10;
console.log("Fibonacci Series: " + num1 + ", " + num2 + ", ");
for(let i=2; i<n; i++){
    nextNum = num1 + num2;
    console.log(nextNum + ", ");
    num1 = num2;
    num2 = nextNum;
}
console.log("Fibonacci Series: " + num1 + ", " + num2 + ", ");