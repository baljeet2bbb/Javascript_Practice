// const { error } = require("console");

// //async fucntion without await 
// async function f1() {
//     console.log("this is async function");
//     return 42;//return a resolved promise ;
// }

// f1()
// .then(result=>{
//     console.log(result);
// })

// //async function without await but with error
// async function f2() {
//     console.log("this is async function with error");
//     throw new Error("this is error");//return a rejected promise ;
// }

// f2().catch(error =>{
//     console.log(`the error message ${error}`);
// })

//async function with resolved/rejected promise

function getInfo(){
    return new Promise((resolve, reject)=>{
        const randomNumnber = Math.random();
        setTimeout(()=>{
            if(randomNumnber<0.5){
                resolve(randomNumnber);
            }
            else{
                reject(new Error("wrong value error"));
            }
        },2000);
    })
}


async function getNumberInfo() {
    try{
    const result = await getInfo();
    console.log("Result: ", result);
    }
    catch(error){
        console.log("Error: " , error);
    }
}

getNumberInfo();