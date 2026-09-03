//push- add value at the end
let arr=[];
arr.push("apple");
arr.push("mango");
arr.push("banana","orange");
//arr.push("banana, orange"); it is a string
console.log(arr);

//pop- remove value at the end
arr.pop();
console.log(arr);// orange will be removed

//unshift- add value from start
arr.unshift(1);
arr.unshift("lion","sloth");
console.log(arr);

//shift- remove value from start
arr.shift();
console.log(arr);
arr.shift(2);// it ignore the argument and  removes 1 from the start
console.log(arr);

//concat- join 2 arrays
let arr2=[4,5,6,7];
let arr3=arr.concat(arr2);
console.log(arr3);

//Without using concat without using third value
let arr4=[];
for(let a of arr2)
{
    arr.unshift(a);//from start
}
console.log(arr);

//slice- gives the part of array does not include the last index
console.log(arr.slice(2,5));// index 2 to 4 answer- 5,4,1

//splice- change the original array we can add remove, replace the value
let array=["mango","apple","Banana",1,2,3,4];
//Add
array.splice(1,0,7);
console.log(array);

//Remove
array.splice(1,1);//removed 7
console.log(array);

//replace
array.splice(1,2,"kiwi","orange");//apple bnana will be replaced by kiwi and orange 
console.log(array);


