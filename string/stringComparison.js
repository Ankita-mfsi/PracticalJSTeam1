//=== strict equals
let string="helloo";
let str= "hello";
let str1="hello";
let str4="Hello";
let str2= new String("hello");
let str3=new String("hello");
let arr=[1,2,3,4,5,5];
console.log(str===str1);//true
console.log(str===str2);//false
console.log(str2===str3);//false object has different memeories

//localeCompare
console.log(str1.localeCompare(str2));
console.log("B".localeCompare("A"));

//replace
console.log(string.replace("o","O"));//Changes first instance
console.log(string.replace("e","E"));// hEllo

//replaceAll
console.log(string.replaceAll("o","O"));//replace all instances

//case-sensitive
console.log(str===str4);//false

//concat
console.log(str.concat(str1));
console.log(str.concat(" Ankita"));
console.log(''+50);
console.log(70+"");

//null
console.log(str.concat(null));
//undefined
console.log(str.concat(undefined));
//array
console.log(str.concat(arr));
