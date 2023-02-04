class Car4 {
    constructor(color: string, location: string, vin: string){
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    color: string;
    location: string;
    readonly vin: string; // Readonly just for read, assign one time and never override it
    owner!: string; // Add "! -> The data is absouletly in it" or "? -> Make it optional"
    power(state : boolean){
        if(state === true){
            console.log("Starting Engine");
        } else {
            console.log("Shutting down enginer");
        }
    }
}

let samCar = new Car4("Black", "California", "1AA34");
let razCar = new Car4("Red", "Mecedonia", "2AA35");

console.log(`Sameer's car color : ${samCar.color}, location : ${samCar.location} & vin no is ${samCar.vin}`);
console.log(`Raza's car color : ${razCar.color}, location : ${razCar.location} & vin no is ${razCar.vin}`);