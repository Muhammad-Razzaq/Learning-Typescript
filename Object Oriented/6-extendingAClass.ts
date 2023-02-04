class Car6 {
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

class Mercedes extends Car6{
    alloyWheels = true;
    adjustableSuspension = true;
}

let myMercedes = new Mercedes("Blue", "California", "11A");
console.log(myMercedes);
