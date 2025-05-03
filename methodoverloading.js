function print(){
    console.log("hi");
}

//print();
function print(name){

}

function print(name , age){
    console.log("hi " + name + " age " + age);
}

print("Baljeet");

//run test cases on remote machine:
//browsername, browserVersion, remoteExecution
function displayBrowserInfo(browserName,browserVersion,remoteExecution){
    if(typeof browserVersion === 'string' && typeof remoteExecution === 'boolean'){
        console.log(`Browser: ${browserName} , verion: ${browserVersion}, remoteExe: ${remoteExecution}`);
    }
    else if(typeof browserVersion === 'string'){
        console.log(`Browser: ${browserName} , 'verion:': ${browserVersion}`);
    }
    else{
        console.log(`Browser: ${browserName}`);
    }
}


displayBrowserInfo('chrome','115', true);
displayBrowserInfo('chrome','115');
displayBrowserInfo('firefox');

