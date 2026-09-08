let arr=[1,2,3,"apple",'mango'];
console.log(arr);

//input
// let input = require("readline-sync");
// let arr1=[];
// for(let i=0;i<=4;i++)
// {
//     let a=input.question(`Give input for ${i} position \n`);
//     arr1.push(a);

//     //arr1.push("input.question(`Give input for ${i} position \n`)"); Other way to do
// }
// console.log(arr1);

// //check length
// console.log(arr1.length);

let arr2=[...arr,"Ankita"];
console.log(arr2);

// function demo(a,b)
// {
// return [a,b];// returns number as an array
// }
// console.log(demo("ankita","anku"));
//nested array
let arr1=[1,2,3,4,[5,6]];
console.log(arr1);
console.log(arr1[4][0]);


function demo(a,b,c,d,e)
{
return [a,b,c,d,e];// returns number as an array
}
console.log(demo(...arr));

//copy array- deep copy seperate array
let n=[1,2,3];// array
let c = [...n];//copy
console.log(c);
n.push(4);
console.log(n);
console.log(c);

//shallow copy
let y=[1,2];
let j=y;
console.log(j);
y.push(8);
console.log(j);

//merge array
let array1=["apple","mango"];
let array2=[1,2];
let arr3=[];
arr3=[...array1,...array2];
console.log(arr3);




