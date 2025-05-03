function greet(name, callback){
    callback(`Hello, ${name}`);
}

greet('Geek',message =>console.log(message));

