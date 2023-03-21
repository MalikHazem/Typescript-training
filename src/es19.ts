class User2 
{
    private static created: number = 0;
    static getCount(): void 
    {
        console.log(`${this.created} Objects Created`);
    }
    constructor(public username: string)
    {
        User2.created++;
    }
}

let u1 = new User2("Malik");
let u2 = new User2("Hazem");
let u3 = new User2("Ammar");

User2.getCount();