//  - Interface Declaration
interface User {
    id:number,
    userName:string,
    country:string,
    sayHello():string,
    sayWelcome: () => string,
    getDouble(num:number):number
}

let user2:User = {
    id:100,
    userName:'mustafa',
    country:'egypt',
    sayHello() {
        return `hello ${this.userName}`
    },
    sayWelcome() {
        return `welcome in ${this.country}`
    },
    getDouble(num) {
        return num * this.id
    },
}

user2.userName = 'aaaa'

console.log(user2)

function getData(data:User) {
    console.log(`Id is ${data.id}`);
    console.log(`userName is ${data.userName}`);
    console.log(`country is ${data.country}`);
    console.log(user2.sayHello());
    console.log(user2.sayWelcome());
    console.log(user2.getDouble(22));
}

// getData({
//     id: 200, userName: 'hello', country: "Ksa",
//     sayHello: function (): string {
//         throw new Error("Function not implemented.")
//     },
//     sayWelcome: function (): string {
//         throw new Error("Function not implemented.")
//     },
//     getDouble: function (): number {
//         throw new Error("Function not implemented.")
//     },
//     msg: function (): string {
//         throw new Error("Function not implemented.")
//     },
//     userNameee: "",
//     salary: 0
// })

//  - Interface Reopen And Use Cases

interface Settings {
    theme:boolean,
    font:string
}

interface Settings {
    sidebar:boolean
}

interface Settings {
    external?:boolean
}

interface newSettings extends Settings {
    role:string | number
}

let userSettings:newSettings = {
    theme:true,
    font:'string',
    sidebar:true,
    role:'mustafa'
}

// - Class Access Modifiers And Parameters Properties
// class User {
//     private userNameee:string;
//     protected salary:number;
//     msg:() => string;

//     constructor(username: string , salary: number){
//         this.userNameee = username;
//         this.salary = salary ;
//         this.msg = function () {
//             return `hello ${this.userNameee} your salary is ${this.salary}`
//         }
//     }
// }

class User {
    public get userNameee(): string {
        return this._userNameee
    }
    public set userNameee(value: string) {
        this._userNameee = value
    }
    msg:() => string;

    constructor(private _userNameee: string , protected salary: number){
        this.msg = function () {
            return `hello ${this._userNameee} your salary is ${this.salary}`
        }
    }

}

let userOne = new User('Elzero' , 60000);
console.log(userOne._userNameee);

userOne._userNameee = "ahmmm";
// console.log(userOne._userNameee);
// console.log(userOne.salary);
// console.log(userOne.msg());

// - Class Static Members

class User3 {
    static created: number = 0 ;
    static getCount() : void {
        console.log(`${this.created} objected created`)
    }

    constructor(public username:string) {
        User3.created++;
    }
}

let u1 = new User3("elzero");
let u2 = new User3("elzero2");
let u3 = new User3("elzero3");

User3.getCount();

