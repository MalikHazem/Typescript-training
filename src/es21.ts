interface Settings2{
    theme: boolean;
    font?: string;
    save(): void;
}

class User4 implements Settings2{
    constructor(public username: string, public theme: boolean, public font: string){}
    save(): void {
        console.log('Saved');
    }
    update(): void {
        console.log('Updated');
    }
}

let userTwo = new User4("Malik", true, "Open Sans");

console.log(userTwo.theme)
console.log(userTwo.username)
console.log(userTwo.font)

userTwo.save()
userTwo.update()

