class User3 {
    private static _created: number = 0;
    public static get created(): number {
        return User3._created
    }
    public static set created(value: number)
    {
        User3._created = value;
    }
    // private static created: number = 0;
    static getCount(): void{
        console.log(`${this.created} Objects Created`)
    }
    constructor(public username: string)
    {
        User3.created++;
    }
}

let us1 = new User3('Malik');
let us2 = new User3('Web');
let us3 = new User3('School');

console.log(User3.created);
User3.getCount();
