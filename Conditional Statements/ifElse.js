const input = require("readline-sync");
// let name=input.question("Enter your name: ");
// let age=Number(input.question("Enter your age: "));


//if
// if(age>=18)
// {
//     console.log("You're above 18");
// }
// else{
//     console.log("You're under 18");
// }

//nested if

// if(name=="ankita")
// {
//     if(age>18)
//     {
//         console.log("you are above 18");
//     }
//     else
//     {
//         console.log("your age is less than 18");
//     }

// }
// else
// {
//     console.log("Please correct your name");
// }

// if with & operator
// if(name=="Ankita"&& age>=18)
// {
//     console.log("Age and name is correct");
// }
// else
// {
//     console.log("Name or age is incorrect, Please check!");
// }

//PRACTICE
let num = Number(input.question("Enter the number: "));
//Positive, Negative, or Zero
// if(num!=0)
// {
// if(num>0)
// {
//     console.log("Positive");
// }
// else{
//     console.log("Negative");
// }
// }
// else{
//     console.log("Number is zero");
// }

//Grade Calculator
// 90–100 → "A"
// 80–89 → "B"
// 70–79 → "C"
// 60–69 → "D"
// 40–59 → "E"
// 0–39 → "Fail"
// if (num >= 90 && num <= 100) {
//     console.log("A");
// }
// else if (num >= 80 && num <= 89) {
//     console.log("B");
// }
// else if (num >= 70 && num <= 79) {
//     console.log("C");
// }
// else if(num>=60&&num<=69)
// {
//     console.log("D");
// }
// else if(num>=40&&num<=59)
// {
//     console.log("E");
// }
// else if(num>=0&&num<=39)
// {
//     console.log("Fail");
// }
// else
// {
//     console.log("Enter the valid number");
// }

//Leap year

if(num%400==0&&num%4==0&&num%100!=0)
{
console("This is a leap yest")
}
else{
    console.log("This is not a leap year");
}


