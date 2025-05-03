// console.log(1);
// console.log(2);
// console.log(3);

for(let i =1;i<=10;i++){
    console.log(i);//1 2 3 4...10
}
console.log("-----------");

//for...of loop:
const array = [1,2,3,4,5];//0 to 4
for(const e of array){
    console.log(e);
}
console.log("-----------");

//
for(let i =0;i<array.length;i++){
    console.log(array[i]);
}

console.log("-----------");
//while 1 to 10:
let p = 1;
while(p<=10){
    console.log(p);
    //++p;
    p+=1;
}
console.log("-----------");

let l = 2;
while(l<=10){
    console.log(l);
    l +=2;
}
console.log("-----------");
let h = 1;
do{
    console.log(h);
    h++;

}while(h<=10);

//break;
//1 to 100: print the hi when you see multiplicaiton of 5 and break;
console.log("-----------");

let num = 0;
while(num<=100){

    console.log(num);
    if(num % 5 ==0){
        console.log("hi");
        break;
    }
    num ++;
}
console.log("-----------");

//

const browser = ["chrome","firefox","edge","IE"];
for(const e of browser){
    console.log(e);
    if(e == "edge"){
        console.log("launch edge...");
        break;
    }
}

console.log("-----------");

//for... in loop on the object

const user = {

    name: 'John Doe',
    age: '30',
    city: 'New York City',
}

for(const key in user){
    console.log(key + " : " +  user[key]);
}

console.log("-----------");
//for printing array using for in we need to use index 
const br = ["chrome","firefox","edge","IE"];
for(const ele in br){
    console.log(ele + ":"+ br[ele]);
}

