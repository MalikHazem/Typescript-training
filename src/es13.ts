type A = {
    One: string,
    Two: number,
    Three: boolean
}

type B = A & {
    Four: string,
}

type C = {
    Five: string,
}

type D = A & B &{
    Five: number,
}

type Max = A & C;

function getActions2(btns: D)
{
    console.log(btns.One);
    console.log(btns.Two);
    console.log(btns.Three);
    console.log(btns.Four);
    console.log(btns.Five);
}

getActions2({One: 'Malik', Two: 100, Three: true, Four:'Hazem', Five: 200})