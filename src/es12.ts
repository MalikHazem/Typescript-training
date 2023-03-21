// let myImage = document.getElementById("my-img") as HTMLImageElement;
// let myImage = <HTMLImageElement> document.getElementById("my-img");
// console.log(myImage.src);

let data: any = "1000";

console.log((data as string).repeat(3)); // 100010001000

data = 1000

console.log((data as string)); //1000
console.log(typeof(data as string)); //number
console.log((data as string).repeat(3)); // error

