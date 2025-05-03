const square = (num) => num * num;
console.log(square(5));

const message = () => "helllo Js";
console.log(message());


const message1 = () => "helllo js";
console.log(message1());

const add = (a,b) => a+b;
console.log(add(4,5)); 



const getFullName = (person) =>  `${person.firstName} ${person.lastName}`

const person = {
    firstName: 'Baljeet',
    lastName: 'Singh'
}

const fullName = getFullName(person);
console.log(fullName);

//
const greet = (username = 'guest',age = 0) =>  `Hello, ${username}! you are ${age} old `;
const g1 = greet();
console.log(g1);

const g2 = greet('baljeet', 30);
console.log(g2);


//rest params....varargs
const sum = (...numbers) => numbers.reduce((acc,num)=> acc+num,0);
console.log(sum(1,2,3,4,5,6));


//
const browserInfo = (browser = 'chrome',...details) => {
    console.log(`Browser: ${browser}`);
    console.log(`other details:`, details);
}

browserInfo();
browserInfo('firefox','115.11','mozilla','headless');


//max length using Math
const maxVal = (a,b,c) => {
   return Math.max(a,b,c);
}

const findMaxVal = maxVal(10,30,50);
console.log(findMaxVal);