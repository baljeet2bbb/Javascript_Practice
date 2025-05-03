function sum(a,b){
    return a+b;
}

console.log(sum(10,10));

function product(a,b){
    return a*b;
}


console.log(product(19,3));

const bigrproduct = product(1231232,213312);
console.log(bigrproduct);

console.log("-----------------------");

setTimeout(function (){
    console.log("You rock");
}, 1000);

setTimeout(()=> console.log("You rock"), 1000);