class Food
{
    constructor(public title:string){}
    abstract getCookingTime(): void;
}

class Pizza extends Food{
    constructor(title: string, public price: number)
    {
        super(title);
    }
    getCookingTime(): void {
        console.log('Cooking Time For Pizza Is 1 Hour');

    }
}

class Burger extends Food{
    constructor(title: string, public price: number)
    {
        super(title);
    }
    getCookingTime(): void {
        console.log('Cooking Time For Burger Is Half Hour');
    }
}

let pizzaOne = new Pizza("Awesome Pizza", 100)

let burgerOne = new Burger("Awesome Burger", 50)
    
console.log(pizzaOne.title);
console.log(pizzaOne.price);
console.log(burgerOne.title);
console.log(burgerOne.price);

pizzaOne.getCookingTime()
burgerOne.getCookingTime()

