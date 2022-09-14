"use strict";
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(calculate(10, 20));
console.log(calculate(+true, +true));
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20));
console.log(printInfo("10", "20"));
let arr;
arr = [1, [true], ['ssss', ['sss', 22]]];
function reportErrors(username, age) {
    return `Username: ${username} age ${age}`;
}
console.log(reportErrors("Elzero", 40));
const message = "Hello World!";
message.toLowerCase();
//# sourceMappingURL=firstAssignments.js.map