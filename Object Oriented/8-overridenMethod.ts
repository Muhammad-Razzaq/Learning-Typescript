class Car8 {
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

class Pajero extends Car8{
    constructor(color: string, location: string, vin: string, allowWheels: boolean){
        super(color, location, vin)
        this.alloyWheels = allowWheels;
    }
    alloyWheels: boolean;
    adjustableSuspension = true;
    power(state : boolean){
        if(state === true){
            console.log("Starting Pajero Engine");
        } else {
            console.log("Shutting down pajero enginer");
        }
    }
} 

let myPajero = new Pajero("Blue", "California", "11A", true);
console.log(myPajero);
myPajero.power(true);
