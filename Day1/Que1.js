//Object Distruction
const object=["Mike","Joe","Tyson","Jane","Mary","James","Dom"];
for(const a of object)
{
    console.log(a);
}
console.log("==========================");

//Itration
const a="Hello Guyss";
for(const b of a)
{
     console.log(b);
}
console.log("==========================");

//Arrow Function

let day = object =>
{
    return object
}
console.log(day(object));
console.log("==========================");


//Spread Operator

console.log(...object);