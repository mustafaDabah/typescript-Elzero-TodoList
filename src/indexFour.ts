// - Abstract Classes And Members
abstract class Food {
    constructor(public title: string) {}
    abstract getCookingTime():void 
}

class Pizza extends Food {
    constructor(title:string , public price: number) {
        super(title)
    }
    getCookingTime(): void {
        console.log('cooking time for pizza is 1 hour')
    }
}

class Burger extends Food {
    constructor(title:string , public price: number) {
        super(title)
    }
    getCookingTime(): void {
        console.log('cooking time for Burger is 1 hour')
    }
}

let pizzaOne = new Pizza('awesome pizza' , 100);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime()

// - Generics Introduction
function returnNumber(val:number):number {
    return val;
}
 
function returnString(val:string):string {
    return val;
}

function returnBoolean(val:boolean):boolean {
    return val;
}

function returnType<T>(val:T) {
    return val
}

console.log(returnType<number>(100));
console.log(returnType<string>('100'));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1,2,3,4]));

// - Generics Multiple Types
const returnTypeArrowFun = <T>(val:T):T => val;

function testType<T>(val:T):string {
    return `the value is ${val} and type is ${typeof val}`
}

console.log(testType<number>(100));
console.log(testType<string>('100'));

function multTypes<T , S>(valueOne:T , valueTwo:S):string {
    return `the value is ${valueOne} and type is ${valueTwo}`
}

console.log(multTypes<string,number>('ssss' , 1000));

// - Generics And Interfaces