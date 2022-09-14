"use strict";
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log('cooking time for pizza is 1 hour');
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log('cooking time for Burger is 1 hour');
    }
}
let pizzaOne = new Pizza('awesome pizza', 100);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
function returnNumber(val) {
    return val;
}
function returnString(val) {
    return val;
}
function returnBoolean(val) {
    return val;
}
function returnType(val) {
    return val;
}
console.log(returnType(100));
console.log(returnType('100'));
console.log(returnType(true));
console.log(returnType([1, 2, 3, 4]));
const returnTypeArrowFun = (val) => val;
function testType(val) {
    return `the value is ${val} and type is ${typeof val}`;
}
console.log(testType(100));
console.log(testType('100'));
function multTypes(valueOne, valueTwo) {
    return `the value is ${valueOne} and type is ${valueTwo}`;
}
console.log(multTypes('ssss', 1000));
//# sourceMappingURL=indexFour.js.map