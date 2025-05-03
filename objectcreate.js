//1. Object Literals:{}

const user = {
    name: 'baljeet',
    age : 25,
    country : 'US',
    Occupation: 'Engineer' 
};

console.log(user.name);
console.log(user.Occupation);

//Constructor Function:
function Car(brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;

};

const c1 = new Car("BMW","520D",10000);
console.log(c1.brand);
console.log(c1.brand + " " + c1.model + " " + c1.price);

const c2 = new Car("Audi","52",15000);
console.log(c2.brand);
console.log(c2.brand + " " + c2.model + " " + c2.price);


//Class style:

class Customer{
    constructor(name,product){
        this.name = name; // Instance Variable 
        this.product = product;
    }

    addToCart(){
        console.log(`${this.product} added to cart`);
    }
}

//instance of the class:
const cust1 = new Customer("Baljeet","Apple macbook pro");
console.log(cust1.name);
console.log(cust1.product);
cust1.addToCart();


//Object.create() method : with some prototype object 
const employeePrototype = {
    printinfo:function(){
        console.log(`hello, emp name is ${this.name}`);
    }
}

const e1= Object.create(employeePrototype);
e1.name = "Baljeet";
e1.printinfo();

//Using Factory Function: returns an object 
function createDepartment(deptName, hod){
    return{
        deptName: deptName,
        hod:hod,
        getDepartmentInfo: function(){
            console.log(`hello, dept name is ${this.deptName}`);
        }
    }
}
const dep1= createDepartment("Physics","H C Verma");
const dep2= createDepartment("Maths","RD Sharma");
dep1.getDepartmentInfo();
dep2.getDepartmentInfo();

console.log(dep1.deptName + " " + dep1.hod);