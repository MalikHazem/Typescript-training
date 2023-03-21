let myObject: {
    readonly id: number,
    username: string,
    hire?: boolean,
    skills: 
    {
        One: string,
        Two: string,
    }
} = {
    id: 1,
    username: "Malik",
    // hire: true,
    skills: {
        One: 'HTML',
        Two: 'CSS'
    },
};

myObject.id = 2,
myObject.username = 'Hazem',
myObject.hire = true,
myObject.skills.One = 'React js',
myObject.skills.Two = 'flutter',
// myObject.skills = {
//     One: 'React js',
//     Two: 'flutter'
// },

console.log(myObject.id);
console.log(myObject.username);
console.log(myObject.hire);
console.log(myObject.skills.One);
console.log(myObject.skills.Two);

