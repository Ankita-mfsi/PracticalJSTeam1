let str="Ankita";
let str1="Hello world, world";

//charAt()-Return the chracter at a specific position
console.log(str.charAt(4));

//charCodeAt()-Return the unicode value of a chracter
console.log(str.charCodeAt("a"));

// toUpperCase()-Return string in uppercase 
console.log(str.toUpperCase());

// toLowerCase()- return string in lowercase
console.log(str.toLowerCase());

// indexOf()- Finds the 1st position of word/chracter
console.log(str1.indexOf("o")); //4
console.log(str1.indexOf("world"));//6

//lastIndexOf()- Finds the last position of word/chracter
console.log(str1.lastIndexOf("o")); //6
console.log(str1.lastIndexOf("world"));//14

// substring()-returns the part of string- exclude the last index position
console.log(str.substring(1,3));//nk

// slice()-returns the part of string , it supports nevgative indexing
console.log(str.slice(0));//Ankita
console.log(str.slice(-6)); //Ankita


// split()-convert string into Array
console.log(str1.split(" "));
console.log(str.split(""));// convert every chracter in array.

// trim()- remove spaces from start and end 
let str2 = "   Ankita   ";
console.log(str2.trim());

//trimStart()- remove spaces from start
console.log(str2.trimStart());

//trimEnd()- remove spaces from end
console.log(str2.trimEnd());