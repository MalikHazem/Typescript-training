// const KIDS = 12
// const EASY = 9
// const MEDIUM = 6
// const HARD = 3

function getHardSecond()
{
    return 3;
}

enum Kids
{
    Five = 5,
    Seven = 7,
    ten = 10
}

enum Level 
{
    insane, 
    Kid = Kids.ten,
    Easy = 9,
    Medium = Easy - 3,
    Hard = getHardSecond(),
    insane2
}

let lvl: string = "Easy";

if(lvl === "Easy")
{
    console.log(`The Level is ${lvl} And number of Second is ${Level.Easy}`);
}