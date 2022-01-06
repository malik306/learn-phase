"use strict";
exports.__esModule = true;
var PointB = /** @class */ (function () {
    //private x!:number;//if we cant add here this line then we need to clean the code
    //so that add the parameter with private keyword in the constructor parameter otherwise remove private keyword
    function PointB(a, b) {
        this.a = a;
        this.b = b;
        //if I have added the parameter with private keyword with variable then we dont need to add the this keyword like
        //this.a=a;//like this
    }
    PointB.prototype.drawB = function () {
        console.log("" + this.a);
    };
    PointB.prototype.getA = function () {
        return this.a;
    };
    PointB.prototype.setA = function (value) {
        if (value < 0)
            throw new Error('Value cannt be less than zero');
        this.a = value;
    };
    return PointB;
}());
exports["default"] = PointB;
