let str = "12321";
let revStr = str.split('').reverse().join('');
if(str === revStr){
    console.log("String is pallindrome");
}
else{
    console.log("String is not pallindrome");
}