class Player
{
    constructor(public name: string){}
    attack(): void
    {
        console.log('Attacking');
    }
}

class Amazon extends Player
{
    constructor(name: string, public spears: number){
        super(name)
    }
    override attack(): void {
        super.attack();
        console.log('Attacking With Spears');
        this.spears -= 1;
    }
}

class Barbarian extends Player
{
    constructor(name: string, public axeDurability : number){
        super(name)
    }
    override attack(): void {
        super.attack();
        console.log('Attacking With Axe');
        this.axeDurability -= 1;
    }
}

let amzOne = new Barbarian('Malik', 200);
let BarOne = new Barbarian('Malik', 200);

console.log(amzOne.name);
console.log(BarOne.axeDurability);

amzOne.attack()
BarOne.attack()
