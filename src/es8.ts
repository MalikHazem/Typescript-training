type nums = 0 | 1 | -1;

function compare(n1: number, n2: number): nums
{
    if(n1 == n2)
    {
        return 0
    }
    else if ( n1 > n2)
    {
        return 1
    }
    else
    {
        return- 1
    }
}

console.log(compare(10, 10))
console.log(compare(20, 10))
console.log(compare(10, 20))

let myNumber: nums = 100 