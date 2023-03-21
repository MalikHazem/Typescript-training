let all2: string | number  = "Malik";
// let all2: string | number |boolean = "Malik"; = let all2: any = "Malik";

all2 = "A";
all2 = 0;
all2 = true; 

////////////    myFriends   ///////////////

let myFriends = ["Osman", "Ahmad", "Hazem", 10]

for(let i = 0; i = myFriends.length; i++)
{
    console.log(myFriends[i].repeat(3));
}

////////////    myFriends2   ///////////////

let myFriends2: string[] = ["Osman", "Ahmad", "Hazem", 10]

for(let i = 0; i = myFriends2.length; i++)
{
    console.log(myFriends2[i].repeat(3));
}

////////////    myFriends3   ///////////////

let myFriends3: string[] = ["Osman", "Ahmad", "Hazem"]

for(let i = 0; i = myFriends3.length; i++)
{
    console.log(myFriends3[i].repeat(3));
}