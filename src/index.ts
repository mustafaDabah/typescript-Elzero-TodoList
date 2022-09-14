console.log(Math.floor(1));
console.log(Math.ceil(1));

let theName: string = 'msuss';
let age: number = 40 ;
let hire:boolean  = true;
let all: any  = true;
let allVars: string | number ; // any 

// hire = 2
all = 1 

allVars = 3 ;
allVars = '3' ;

// Type Annotations With Arrays

let allTwo: string | number | boolean ;
allTwo = 'a';
allTwo = 100 ;
allTwo = true

let myFriend:string[] = ['m' , 'n' , 'c' ];
for(let i = 0 ; i < myFriend.length ; i++) {
    console.log(myFriend[i].repeat(3))
}

// Type Annotations With Multidimensional Arrays

let arrayTwo:(number | string)[] = [1 , 2 ,3 , 'f' , 'v'];
let nestArray:(number | string | boolean[])[] = [1 , 2 ,3 , 'f' , 'v' , [false , true]];
let arrayFour:(number | string | boolean[] |boolean)[] = [1 , 2 ,3 , 'f' , 'v' , [false , true] , true , false]

// Type Annotations With Function
let showMes = true;
function showDetails(name: string, age: number , salary: number):string {
    // let n = 20 ;
    if(showMes) {
        return `hello ${name} age is ${age} salary ${salary}`
    }

    return 'there is no data'
}

console.log(showDetails('Osama' , 40 , 5000 ));

// Function Optional and Default Parameters
function showData(name: string , age: number , country?: string) {
    return `${name} - ${age} - ${country}`
}

console.log(showData('mmm' , 40 ))

// Function Rest Parameter
function addAll(...nums:number[]):number {
    let result = 0 ;
    for(let i = 0 ; i < nums.length ; i++) {
        result += nums[i];
    }
    return result;
}

console.log(addAll(10 , 20 , 30 , 40 , +true));

// Type Annotations With Anonymous And Arrow Function
const addN = (num:number , num1:number):number => num + num1
console.log(addN(1 , 2))


