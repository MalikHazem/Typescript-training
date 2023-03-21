function logging(msg: string): void
{
    console.log(msg);
    return;
}

console.log(logging("i'm a massage"));

const fail = (msg: string) =>
{
    throw new Error(msg);
    return msg;
}

function alwaysLog(msg: string): never
{
    while(true)
    {
        console.log(msg);
    }
    return msg;
}

alwaysLog("Osman")