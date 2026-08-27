/* var a=10;
 var a=20;
 a=30;
console.log(a);*/
//---------------SCOPE OF VARIABLES----------------
function f()
{
    var v=10;
    
    {
        let b=20;
        const c=40;
        console.log(v);
       
    }
     console.log(b);
        console.log(c);
}

f();