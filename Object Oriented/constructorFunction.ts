class Car3 {
    constructor(color: string){
        this.color = color;
    }
    color: string;
    power(state : boolean){
        if(state === true){
            console.log("Starting Engine");
        } else {
            console.log("Shutting down enginer");
        }
    }
}

let sameerCar = new Car3("Black");
let razaCar = new Car3("Red");

console.log(`Sameer's Car is ${sameerCar.color}`);
console.log(`Raza's Car is ${razaCar.color}`);
