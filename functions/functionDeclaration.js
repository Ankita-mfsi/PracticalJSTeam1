//function declartion
 function demo()
 {
    console.log("first function");
 }
 demo();// function calling

 //anonymous function
let fn=function()
{
console.log("Function expression");
}

//arrow function
const fn1=()=>{
    console.log("Arrow function ");
};
fn1();

//Function expression
let a=function(a,b)
{
return a*b;
}
let result=a(2,3);
console.log(result);