var Car4 = /** @class */ (function () {
    function Car4(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    Car4.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Engine");
        }
        else {
            console.log("Shutting down enginer");
        }
    };
    return Car4;
}());
var samCar = new Car4("Black", "California", "1AA34");
var razCar = new Car4("Red", "Mecedonia", "2AA35");
console.log("Sameer's car color : ".concat(samCar.color, ", location : ").concat(samCar.location, " & vin no is ").concat(samCar.vin));
console.log("Raza's car color : ".concat(razCar.color, ", location : ").concat(razCar.location, " & vin no is ").concat(razCar.vin));
