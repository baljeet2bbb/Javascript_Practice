const fs = require("fs");
const data = fs.readFile("baljeet.txt","utf-8", (error, data)=>{
    console.log(data);
});

console.log("bye baljeet");