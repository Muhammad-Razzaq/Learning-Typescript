var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car7 = /** @class */ (function () {
    function Car7(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    Car7.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Engine");
        }
        else {
            console.log("Shutting down enginer");
        }
    };
    return Car7;
}());
var Jeep = /** @class */ (function (_super) {
    __extends(Jeep, _super);
    function Jeep(color, location, vin, allowWheels) {
        var _this = _super.call(this, color, location, vin) || this;
        _this.adjustableSuspension = true;
        _this.alloyWheels = allowWheels;
        return _this;
    }
    return Jeep;
}(Car7));
var myJeep = new Jeep("Blue", "California", "11A", true);
console.log(myJeep);
