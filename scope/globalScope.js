var a=10;
let b=20;
let c=30;

function sum()
{
    console.log(a+b+c);
}
sum();

//same variable declared inside

function multiply()
{
    var a=2;
    let b=2;
    console.log(a*b*c); //2(local)*2(local)*30(global)
  
}
multiply();
