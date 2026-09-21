//npm install readline-sync [to install the package]
//let input = require("readline-sync");// this is common js=bring/use the readlin-sync pakcage tool to the project
import input from "readline-sync"; //ES Module.
//String
let name = input.question("enter your name: ");
console.log("You have entered name ", name);
console.log(typeof name);

//Number
let age=Number(input.question("Enter you age"));
console.log("You have entered age ", age);
console.log(typeof age);