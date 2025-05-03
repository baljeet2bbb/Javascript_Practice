// const { error } = require("console");
// const { resolve } = require("path")

//Function that returns a resolved promise:
const resolvePromise = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Resolved!");
        }, 2000);
    });
};

const rejectPromise = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout =>(()=>{
            reject("Rejected");
        },500);   
    });
};

Promise.race([
    rejectPromise(),
    resolvePromise()
])
.then(result=>{
    console.log("Result:" , result);
})
.catch(error =>{
    console.log("Error ", error);
})

