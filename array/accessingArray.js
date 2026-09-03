//ways to access the array elements
let arr=[1,2,3,"apple",'mango'];
console.log(`All array element ${arr}`);

//for of loop
for(let a of arr)
{
    console.log(a);
}
//by indexing

console.log(arr[3]);
//console.log(arr(3));//error

//loop
for(i=0;i<=arr.length-1;i++)
{
    console.log(`array element at ${i} index is ${arr[i]}`);
}