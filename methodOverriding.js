class Car{
    minSpeed = 100;
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    startEngine(){
        console.log("Starting engine..."); 
    }
}

class Audi extends Car{


    minSpeed = 200;
    //Overridden method
    startEngine(){
        console.log("starting engine...for Audi");
    }

    autoParking(){
        console.log("auto parking ");
    }
}



const audi = new Audi();
audi.startEngine();
audi.autoParking();
console.log(audi.minSpeed);

const car = new Car();
car.startEngine();
//car.autoParking();