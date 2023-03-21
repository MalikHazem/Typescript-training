const returnTypeArrowSyntax = <T>(val: T): T => val

console.log(returnTypeArrowSyntax<number>(100));
console.log(returnTypeArrowSyntax<string>('Malik'));

function testType<T>(val: T): string
{
    return `The Value Is ${val} AND Type Is ${typeof val}`;
}

console.log(testType<number>(100));
console.log(testType<string>('Malik'));

function multipleTypes<T, S>(valOne: T, valTwo: S): string
{
    return `The First Value Is ${valOne} And Second Value Is ${valTwo}`;
}

console.log(multipleTypes<string ,number>('Malik', 100));
console.log(multipleTypes<string, boolean>('Hazem', true));
console.log(multipleTypes<number, boolean>(200, false));
