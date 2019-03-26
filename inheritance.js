//INHERITANCE

class Vehicle {
    constructor(manufacturer, numOfWheels) {
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
    }
    aboutVehicle() {
        console.log(`Make: ${this.manufacturer} Number of Wheels: ${this.numOfWheels}.`)
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, numOfWheels, numOfDoors, bed) {
        super(manufacturer, numOfWheels);
        this.numOfDoors = numOfDoors;
        this.bed = bed
    }
    aboutVehicle() { console.log(`Make: ${this.manufacturer} Number of Wheels: ${this.numOfWheels}. Number of doors ${this.numOfDoors}. Truck Bed ${this.bed}.`); }
}


class Sedan extends Vehicle {
    constructor(manufacturer, numOfWheels, size, mpg) {
        super(manufacturer, numOfWheels);
        this.size = size
        this.mpg = mpg;
    }
    aboutVehicle() { console.log(`Make: ${this.manufacturer} Number of Wheels: ${this.numOfWheels}. Size: ${this.size}. MPG: ${this.mpg}.`); }
}


class Motorcycle extends Vehicle {
    constructor(manufacturer, numOfWheels, handlebars, noDoors) {
        super(manufacturer, numOfWheels);
        this.handlebars = handlebars;
        this.noDoors = noDoors;
    }
    aboutVehicle() { console.log(`Make: ${this.manufacturer} Number of Wheels: ${this.numOfWheels}. handlebars: ${this.handlebars}. Doors: ${this.noDoors}.`); }

}
let v1 = new Vehicle("Toyota", 4);
v1.aboutVehicle()
let v2 = new Truck("Dodge", 4, 4, true);
v2.aboutVehicle();
