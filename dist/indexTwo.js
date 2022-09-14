"use strict";
let theNameTwo = 'mustafa';
let alll = 10;
alll = 'ahmed';
function getActions(btns) {
    console.log(`action for button up is ${btns.up}`);
    console.log(`action for button right is ${btns.right}`);
    console.log(`action for button down is ${btns.down}`);
    console.log(`action for button left is ${btns.left}`);
}
getActions({ up: 'jump', right: 'go right', down: 'go down', left: 'go Left' });
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(20, 20));
console.log(compare(20, 15));
console.log(compare(20, 30));
let myNumber = 1;
let article = [100, 'hi', true];
article = [12, 'title two', false];
console.log(article);
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging('i am a message'));
var Kids;
(function (Kids) {
    Kids[Kids["five"] = 5] = "five";
    Kids[Kids["seven"] = 20] = "seven";
    Kids[Kids["ten"] = 11] = "ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["Kid"] = 11] = "Kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = 3] = "Hard";
})(Level || (Level = {}));
let lvl = 'Easy';
if (lvl === 'Easy') {
    console.log(`the level is ${lvl} and number is ${9}`);
}
let myImg = document.getElementById('img');
console.log(myImg.src);
function getActionss(btn) {
    console.log(`hello ${btn.one}`);
    console.log(`hello ${btn.two}`);
    console.log(`hello ${btn.three}`);
    console.log(`hello ${btn.four}`);
}
getActionss({ one: 'string', two: 100, three: true, four: 100 });
let myObject = {
    username: 'elzero',
    id: 100,
    hire: true,
    skills: {
        one: "Html",
        two: 'css'
    }
};
console.log(myObject.skills.one);
//# sourceMappingURL=indexTwo.js.map