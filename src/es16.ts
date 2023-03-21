interface Settings
{
    One: string
}

interface Settings
{
    Two: number
}

interface Settings
{
    Three: boolean | number
}

let userSettings: Settings = {
    One: "Malik",
    Two: 2002,
    Three: true
}

console.log(userSettings);