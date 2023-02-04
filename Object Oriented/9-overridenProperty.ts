class Car9 {
    constructor(color: string, location: string, vin: string | number){
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    color: string;
    location: string;
    readonly vin: string | number ; 
    owner?: string; 
    power(state : boolean){
        if(state === true){
            console.log("Starting Engine");
        } else {
            console.log("Shutting down enginer");
        }
    }
}

class Toyota extends Car9{
    constructor(color: string, location: string, vin: number, allowWheels: boolean){
        super(color, location, vin)
        this.alloyWheels = allowWheels;
    }
    alloyWheels: boolean;
    adjustableSuspension = true;
    power(state : boolean){
        if(state === true){
            console.log("Starting Toyota Engine");
        } else {
            console.log("Shutting down Toyota enginer");
        }
    }
} 

let myToyota = new Toyota("Blue", "California", 1, true);
let myCar9 = new Car9("Blue", "California", 1);
console.log(myToyota);
myToyota.power(true);
