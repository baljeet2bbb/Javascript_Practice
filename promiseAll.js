// //1.
// // f1--resolve
// // f2--resolve
// // f3--resolve

// const { error } = require("console");

// // const { reject } = require("async");
// // const { error } = require("console");
// // const { resolve } = require("path")
// // const { setTimeout } = require("timers/promises")

// const function1 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             //resolve("Data from function 1");
//             const data = [1,2,3,4,5];
//             resolve(data);
//         },2000);
//     });
// }


// const function2 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             //resolve("Data from function 2");
//             const data = [6,7,8,9,10];
//             resolve(data);
//         },2000);
//     });
// }

// const function3 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             //resolve("Data from function 3");
//             const data = [11,12,13,14,15];
//             resolve(data);
//         },2000);
//     });
// }


// Promise.all([
//     function1(),
//     function2(),
//     function3()
// ]) 
// .then(dataArray=>{
//     console.log("All data form diff functions: " ,dataArray);
// })
// .catch(error=>{
//     console.log("Error in promise");
// })

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


Promise.all([
    getData(),
    getError()
])
.then(dataArray=>{
    console.log("All data fetched: "+ dataArray);
})
.catch(error=>{
    console.log("Error Occcured:", error);
})
