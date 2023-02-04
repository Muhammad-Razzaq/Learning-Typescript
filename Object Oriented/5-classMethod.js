var Car2 = /** @class */ (function () {
    function Car2() {
        this.color = "Silver";
    }
    Car2.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Engine");
        }
        else {
            console.log("Shutting down enginer");
        }
    };
    return Car2;
}());
var myCar = new Car2();
console.log(myCar.color);
myCar.power(true);
