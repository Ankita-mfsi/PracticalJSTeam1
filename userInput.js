//npm install readline-sync [to install the package]
let input = require("readline-sync");// bring/use the readlin-sync pakcage tool to the project

//String
let name = input.question("enter your name: ");
console.log(typeof name);

//Number
let age=Number(input.question("Enter you age"));
console.log(typeof age);