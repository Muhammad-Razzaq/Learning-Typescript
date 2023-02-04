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
var Car8 = /** @class */ (function () {
    function Car8(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    Car8.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Engine");
        }
        else {
            console.log("Shutting down enginer");
        }
    };
    return Car8;
}());
var Pajero = /** @class */ (function (_super) {
    __extends(Pajero, _super);
    function Pajero(color, location, vin, allowWheels) {
        var _this = _super.call(this, color, location, vin) || this;
        _this.adjustableSuspension = true;
        _this.alloyWheels = allowWheels;
        return _this;
    }
    Pajero.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Pajero Engine");
        }
        else {
            console.log("Shutting down pajero enginer");
        }
    };
    return Pajero;
}(Car8));
var myPajero = new Pajero("Blue", "California", "11A", true);
console.log(myPajero);
myPajero.power(true);
