//Use Case
//Usefull when you want to process all promises, whether they succeed or fail,
//and you want to gather information about the outcome of each promise.

//case 2:
//f1: -- resolved 
//f2: -- rejected

const getData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data from getData");
           
        },2000);
    });
};

const getError = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Error: Data is not avaiable from getError");
        },2000);
    });
};

Promise.allSettled([
    getData(),
    getError()
])
.then(results=>{
    results.forEach(result =>{
        if(result.status === 'fulfilled'){
            console.log("Value: ", result.value);
        }
        else{
            console.error("reason for rejection: " , result.reason);
        }
    })
})