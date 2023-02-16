"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Country = /** @class */ (function () {
    function Country(name, language, population, populationGrwothRate, _statePrivacey, _leader) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrwothRate = populationGrwothRate;
        this._statePrivacy = _statePrivacey;
        this._leader = _leader;
    }
    Object.defineProperty(Country.prototype, "privateData", {
        get: function () {
            return this._statePrivacy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "leader", {
        set: function (newLeader) {
            this._leader = newLeader;
        },
        enumerable: false,
        configurable: true
    });
    return Country;
}());
var OICCountry = /** @class */ (function (_super) {
    __extends(OICCountry, _super);
    function OICCountry(name, language, population, populationGrwothRate, statePrivacy, leader) {
        return _super.call(this, name, language, population, populationGrwothRate, statePrivacy, leader) || this;
    }
    OICCountry.prototype.populationGrowth = function () {
        this.population = this.population * (1 + this.populationGrwothRate / 100);
        return this.population;
    };
    return OICCountry;
}(Country));
var Pakistan = new OICCountry("Pakistan", "Urdu", 30000000, 2.5, "Private Data", "Pakistan Leader");
console.info(Pakistan);
// Pakistan._statePrivacy // Error because of private
// console.info(Pakistan.privateData);
Pakistan.leader = "New Leader";
console.info(Pakistan);
