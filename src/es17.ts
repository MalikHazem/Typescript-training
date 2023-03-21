interface User2
{
    One: string
    Two: number
    Three: boolean
}

interface Moderator extends User2
{
    four: boolean | number
}

interface Admin extends Moderator // or User, Moderator
{
    five: string | number
}

let userSettings2: Admin = {
    One: "Malik",
    Two: 2002,
    Three: true,
    four: 0,
    five: '1',
}

console.log(userSettings2);