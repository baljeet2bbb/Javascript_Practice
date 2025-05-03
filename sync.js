//sync vs async behaviour:
//1 -- done --> fetch 100 users from API/DB -- 20 secs
//2 -- done --> display user profile -- 10 secs 
//3 -- done
//4 -- done 
//end 
//blocking behaviour for the user 

// console.log("start");
// for(let i =0;i<30000;i++){
//     console.log(i);
// }

// console.log("end");

//Async:
//1. --fetch user --fetch 100 users from API/DB -- 20 secs --> callback function : Promises
//2. -- display user profile -- 10 secs 
//3. --fetch order info -- 5 secs 
//4. -- do something else --  

// console.log("start");
// setTimeout(()=>{
//     console.log("timeout is done");
// },10000)
// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");



const fs = require('fs');
const data = fs.readFileSync("baljeet.txt","utf-8");
console.log(data);

console.log("Bye Baljeet");