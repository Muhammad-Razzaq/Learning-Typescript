class Car5 {
    constructor(color: string, location: string, vin: string){
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    color: string;
    location: string;
    readonly vin: string; 
    owner?: string; 
    power(state : boolean){
        if(state === true){
            console.log("Starting Engine");
        } else {
            console.log("Shutting down enginer");
        }
    }
}

let sameCar = new Car5("Black", "California", "1AA34");
let razeCar = new Car5("Red", "Mecedonia", "2AA35");

let SamCar: Car5;

// Every class has type so we use this type is resuse 
sameCar = {
    color: "Silver",
    location: "Macedonia",
    vin: "11C",
    power(){}
}