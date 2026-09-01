//Named function
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

//Immediately Invoked Function Expression (IIFE)
//This is to 
(function ()
{
console.log('This is Immediately invoked function expression');
})();

//Higher order function
function demo1(f,a,b)
{
    
 let result=f(a,b);// calling demo2 and asigning return value
console.log("The addition of a+b is "+ result);
console.log(`The multiplication of ${result} and ${b} is ${result*b}`);
 
}
function demo2(a,b)
{

    return a+b;
}

demo1(demo2,2,2);// passing demo2 as an argument (higher order function)