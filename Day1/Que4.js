//includes()
let text = "Hello Guys!!! Welcome into the coding world";
console.log(text.includes("Welcome"));
console.log("-----------------------------");

//Startswith()
console.log(text.startsWith("Hello"));
console.log("------------------------------");

//Endswith()
console.log(text.endsWith("world"));
console.log("-----------------------------");

//entries()

let names =["Ritesh","Harsh","Abhijeet","Saurabh","Rajnish"];
const n= names.entries();
for(let x of n)
{
    console.log(x);
}

console.log("------------------------------");

//form()
console.log(Array.from("RITESH"));
console.log("-------------------------------");

//find()
const xyz =[10,20,30,40,50];
// console.log(xyz.find(a  =>  a>20));
let x1= xyz.find(myFunction);

function myFunction(value)
{
    return value>20;
}
console.log(x1);
console.log("-------------------------------");

//findIndex()

 const Numbers=[2,4,6,8,10];
// console.log(Numbers.findIndex(a => a>6));
 let index=Numbers.findIndex(myFunction);
function myFunction(value)
{
    return value>6;
}
console.log(index);
// console.log("---------------------------------");

//Math Functions
console.log(Math.trunc(5.6));
console.log("---------------------------------");
console.log(Math.sign(-4));
console.log("---------------------------------");
console.log(Math.cbrt(64));
console.log("---------------------------------");
console.log(Math.log2(100));
console.log("---------------------------------");
console.log(Math.log10(25));
console.log("---------------------------------");