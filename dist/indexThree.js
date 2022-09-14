"use strict";
let user2 = {
    id: 100,
    userName: 'mustafa',
    country: 'egypt',
    sayHello() {
        return `hello ${this.userName}`;
    },
    sayWelcome() {
        return `welcome in ${this.country}`;
    },
    getDouble(num) {
        return num * this.id;
    },
};
user2.userName = 'aaaa';
console.log(user2);
function getData(data) {
    console.log(`Id is ${data.id}`);
    console.log(`userName is ${data.userName}`);
    console.log(`country is ${data.country}`);
    console.log(user2.sayHello());
    console.log(user2.sayWelcome());
    console.log(user2.getDouble(22));
}
let userSettings = {
    theme: true,
    font: 'string',
    sidebar: true,
    role: 'mustafa'
};
class User {
    constructor(_userNameee, salary) {
        this._userNameee = _userNameee;
        this.salary = salary;
        this.msg = function () {
            return `hello ${this._userNameee} your salary is ${this.salary}`;
        };
    }
    get userNameee() {
        return this._userNameee;
    }
    set userNameee(value) {
        this._userNameee = value;
    }
}
let userOne = new User('Elzero', 60000);
console.log(userOne._userNameee);
userOne._userNameee = "ahmmm";
class User3 {
    constructor(username) {
        this.username = username;
        User3.created++;
    }
    static getCount() {
        console.log(`${this.created} objected created`);
    }
}
User3.created = 0;
let u1 = new User3("elzero");
let u2 = new User3("elzero2");
let u3 = new User3("elzero3");
User3.getCount();
//# sourceMappingURL=indexThree.js.map