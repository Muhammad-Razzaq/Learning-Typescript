class Car2 {
    color = "Silver";
    power(state : boolean){
        if(state === true){
            console.log("Starting Engine");
        } else {
            console.log("Shutting down enginer");
        }
    }
}

let myCar = new Car2();
console.log(myCar.color);
myCar.power(true);