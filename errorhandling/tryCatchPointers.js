try
{
let number = 10;
    number.toUpperCase();
}

try
{
let number = 10;
    number.toUpperCase(); //syntaxError: Missing catch or finally after try
}

catch(error) 
{
console.log("hi");
}
// //Error in try catch() catch()
// catch(error) //SyntaxError: Unexpected token 'catch'
// {
// console.log("hi");
// }


try
{
let number = 10;
    number.toUpperCase(); //TypeError: number.toUpperCase is not a function
}
finally
{
    console.log("catched");
}