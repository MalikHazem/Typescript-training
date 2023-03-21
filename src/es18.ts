class User {
    Msg: () => string;
    constructor(private username: string, protected salary: number, public readonly address: string)
    {
        this.username = username;
        this.salary = salary;
        this.Msg = function (){
            return `Hello ${this.username} Your Salary Is ${this.salary}`
        };
    }
    sayMsg(){
        return `Hello ${this.username} Your Salary Is ${this.salary}`
    }
}

let userOne = new User ("Malik", 5000, 'Hebron')

console.log(userOne.Msg());
console.log(userOne.sayMsg());

