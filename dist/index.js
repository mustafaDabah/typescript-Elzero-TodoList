"use strict";
console.log(Math.floor(1));
console.log(Math.ceil(1));
let theName = 'msuss';
let age = 40;
let hire = true;
let all = true;
let allVars;
all = 1;
allVars = 3;
allVars = '3';
let allTwo;
allTwo = 'a';
allTwo = 100;
allTwo = true;
let myFriend = ['m', 'n', 'c'];
for (let i = 0; i < myFriend.length; i++) {
    console.log(myFriend[i].repeat(3));
}
let arrayTwo = [1, 2, 3, 'f', 'v'];
let nestArray = [1, 2, 3, 'f', 'v', [false, true]];
let arrayFour = [1, 2, 3, 'f', 'v', [false, true], true, false];
let showMes = true;
function showDetails(name, age, salary) {
    if (showMes) {
        return `hello ${name} age is ${age} salary ${salary}`;
    }
    return 'there is no data';
}
console.log(showDetails('Osama', 40, 5000));
function showData(name, age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showData('mmm', 40));
function addAll(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
console.log(addAll(10, 20, 30, 40, +true));
const addN = (num, num1) => num + num1;
console.log(addN(1, 2));
//# sourceMappingURL=index.js.map