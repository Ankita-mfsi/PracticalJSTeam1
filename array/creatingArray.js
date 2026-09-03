let arr=[1,2,3,"apple",'mango'];
console.log(arr);

//input
let input = require("readline-sync");
let arr1=[];
for(let i=0;i<=4;i++)
{
    let a=input.question(`Give input for ${i} position \n`);
    arr1.push(a);

    //arr1.push("input.question(`Give input for ${i} position \n`)"); Other way to do
}
console.log(arr1);

//check length
console.log(arr1.length);