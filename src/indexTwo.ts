//  Data Types - Type Alias

type st = string;
let theNameTwo:st = 'mustafa';

type standnum = string | number;
let alll: standnum = 10;
alll = 'ahmed'

// Data Types - Type Alias Advanced
type Buttons = {
    up:string,
    right:string,
    down:string,
    left:string
}

type Last = Buttons & {
    x:3
}

function getActions(btns:Buttons) {
    console.log(`action for button up is ${btns.up}`);
    console.log(`action for button right is ${btns.right}`);
    console.log(`action for button down is ${btns.down}`);
    console.log(`action for button left is ${btns.left}`);
}

getActions({up:'jump' , right:'go right' , down:'go down' , left:'go Left'});

// - Data Types - Literal Types
type numss = 0 | 1 | -1 
function compare(num1:number , num2:number):numss {
    if(num1 === num2) {
        return 0
    } else if (num1 > num2) {
        return 1;
    } else {
        return -1;
    }
}

console.log(compare(20 , 20)); // 0 
console.log(compare(20 , 15)); // 1 
console.log(compare(20 , 30)); // -1 

let myNumber: numss = 1;

// Data Types - Tuple
let article:readonly [number , string , boolean] = [100 , 'hi' , true];
article = [12 , 'title two' , false];
// article.push(100);
console.log(article)

// Data Types - Void And Never
function logging(msg: string):void {
    console.log(msg);
    return;
}

console.log(logging('i am a message'));

// const fail = (msg:string) => {
//     throw new Error(msg);
// }

// function alwaysLog (name:string) {
//     while(true) {
//         console.log(name)
//     }
//     // return;
// }

// console.log(fail('hhhh'));
// console.log(alwaysLog('sss'));

// Data Types - Enums Part 1

enum Kids {
    five = 5,
    seven = 20,
    ten = 11
}

const enum Level {
    Kid = Kids.ten,
    Easy = 9 ,
    Medium = 6 ,
    Hard = 3 
}

let lvl: string = 'Easy';
if(lvl === 'Easy') {
    console.log(`the level is ${lvl} and number is ${Level.Easy}`)
}

// - Data Types - Type Assertions
// let myImg = document.getElementById('my-img') as HTMLImageElement;
let myImg = <HTMLImageElement> document.getElementById('img');
console.log(myImg.src);

// Data Types - Union And Intersection Types
type A = {
    one:string,
    two:number,
    three:boolean
}

type C = {
    four:number
}

type mixAC = A & C ;

function getActionss(btn: mixAC) {
    console.log(`hello ${btn.one}`);
    console.log(`hello ${btn.two}`);
    console.log(`hello ${btn.three}`);
    console.log(`hello ${btn.four}`);
}

getActionss({one:'string' , two:100 , three:true , four:100});

//  - Type Annotations With Object
let myObject : {
    username:string,
    id:number,
    hire:boolean,
    skills:{
        one:string,
        two:string
    }
} = {
    username:'elzero',
    id:100,
    hire:true,
    skills:{
        one:"Html",
        two:'css'
    }
}

console.log(myObject.skills.one)