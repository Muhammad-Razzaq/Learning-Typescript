var Car3 = /** @class */ (function () {
    function Car3(color) {
        this.color = color;
    }
    Car3.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Engine");
        }
        else {
            console.log("Shutting down enginer");
        }
    };
    return Car3;
}());
var sameerCar = new Car3("Black");
var razaCar = new Car3("Red");
console.log("Sameer's Car is ".concat(sameerCar.color));
console.log("Raza's Car is ".concat(razaCar.color));
