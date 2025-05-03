// const { reject } = require("async");
// const { error } = require("console");
// const { resolve } = require("path");

const randomNumPromise = new Promise((resolve, reject)=>{

    //async operation:
    setTimeout(()=>{
            const randomvalue = Math.random();
            if(randomvalue > 0.5){
                resolve(randomvalue);
            }
            else{
                reject(new Error("Value is too small " + randomvalue));
            }
    },2000);
})

randomNumPromise
    .then(result=>{
        console.log("promise is fulfilled with a value ", result);
    })
    .catch(error => {
        console.error("promise is rejected with error."+ error );
    })