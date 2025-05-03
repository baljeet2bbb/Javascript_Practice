// //callback function
// //async call/task- once this task is completed then only callback function wiill be called 


// //basic callback:
// function greet(name, callback){
//     console.log("Hello" + name);//normal/sync step/task
//     callback();
// }

// //callback function
// function welcome(){
//     console.log("welcome!!! ");
// }

// greet("baljeet", welcome);


// //callback with async process
// function printInfo(name, callback){
//     //async task
//     setTimeout(function(){
//         console.log("printing info for "+ name);
//         callback("Plz call me back");
//     }, 5000);
// }

// function displayMessage(mesg){
//     console.log(mesg);
// }

// printInfo("Lisa",displayMessage);

// console.log("-------------------------");

//
function fetchUserData(userId, callback){
    setTimeout(function(){

        const users = {
            1: {id:1, name: "Baljeet"},
            2: {id:2, name: "Rajat"}
        };

        const user = users[userId] ;
        if(user){
                callback(null, user);
        }
        else{
            callback("User not found", null);
        }
},5000);
   
}



//callback function:
function handleUserData(error, user){

    if(error){
        console.log("Error: ", error);
    }
    else{
        console.log("User: ",  user);
    }

}

fetchUserData(3,handleUserData);