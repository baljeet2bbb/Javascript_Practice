class Automobile{
    constructor(chasisNumber){
        
        this.chasisNumber = chasisNumber;
    }

    useAerodynamic(){
        console.log("Automobile--aerodynamic " + this.chasisNumber);
    }
    
}



class Vehicle extends Automobile{
    constructor(make, model, year){
        super(1000);
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo(){
        return `${this.make},${this.model},${this.year}`;
    }

    startEngine(){
        console.log('Starting engine...'+ this.make);
    }

    stopEngine(){
        console.log("Stopping Engine");
    }
}

//child(Sub Class):
class Car extends Vehicle{

    constructor(make, model, year, fuelType){
        
        super(make, model, year);
        this.fuelType = fuelType;
    }

    driverCar(){
        console.log("driving the car " + this.model);
    }

}

class Truck extends Vehicle{

    constructor(make, model, year, loadingCapacity){
        super(make, model, year);
        this.loadingCapacity = loadingCapacity;
    }

    driverTruck(){
        console.log("driving the truck " + this.loadingCapacity);
    }

}


//creating object 
const car = new Car("Honda","Civic",2023, "petrol");
const truck = new Truck("Tata","sumo",2024,1000);

//console.log("driving the car" + this.model + "capacity" + this.loadingCapacity);
car.startEngine();
console.log(car.getInfo());
car.driverCar();
car.useAerodynamic();
console.log(car.chasisNumber);

//console.log(Vehicle.chasisNumber);


truck.startEngine();
console.log(truck.getInfo());
truck.driverTruck();