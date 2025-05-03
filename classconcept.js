class Car{

    
    constructor(name, price, model, color){

        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;
    }

    refuel(){
        console.log(this.name+ " car is refueled");
    }
}

//new keyword: to create the object
// c1 is object reference variable 
//all 4 properties will be given one-to-one mapping.


const c3 = new Car("Audi");
console.log(c3.name);
console.log(c3.price);
console.log(c3.model);
console.log(c3.color);

const c1 = new Car("BMW",100, "520d", "black");
console.log(c1.name);
console.log(c1.price);
console.log(c1.model);
console.log(c1.color);
c1.refuel();
console.log("---------------------");
const c2 = new Car("Honda",10, "Civic", "black");
console.log(c2.name);
console.log(c2.price);
console.log(c2.model);
console.log(c2.color);
c2.refuel();