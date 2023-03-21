"use strict";
class User {
    constructor(username, salary, address) {
        this.username = username;
        this.salary = salary;
        this.address = address;
        this.username = username;
        this.salary = salary;
        this.Msg = function () {
            return `Hello ${this.username} Your Salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
}
let userOne = new User("Malik", 5000, 'Hebron');
console.log(userOne.Msg());
console.log(userOne.sayMsg());
//# sourceMappingURL=es18.js.map