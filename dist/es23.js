"use strict";
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log('Attacking');
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        super.attack();
        console.log('Attacking With Spears');
        this.spears -= 1;
    }
}
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        super.attack();
        console.log('Attacking With Axe');
        this.axeDurability -= 1;
    }
}
let amzOne = new Barbarian('Malik', 200);
let BarOne = new Barbarian('Malik', 200);
console.log(amzOne.name);
console.log(BarOne.axeDurability);
amzOne.attack();
BarOne.attack();
//# sourceMappingURL=es23.js.map