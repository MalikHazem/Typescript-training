interface User {
    id?: number,
    username: string,
    country: string
    sayHello(): string,
    sayWelcome: () => string,
    getDouble(num: number): number
}

let user: User = {
    id: 100,
    username: 'Malik',
    country: 'Palestine',
    sayHello()
    {
        return `Hello ${this.username}`
    },
    sayWelcome: () =>
    {
        return `Welcome ${user.username}`
    },
    getDouble(n)
    {
        return n * 2
    },
}

console.log(user.id);
console.log(user.username);
console.log(user.country);
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(100));

// function getData(data: User)
// {
//     // console.log(data.id);
//     console.log(data.username);
//     console.log(data.country);
// }

// getData({id: 200, username: 'Hazem', country: 'Hebron'})

