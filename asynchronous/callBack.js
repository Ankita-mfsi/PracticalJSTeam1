//addition
function cal(a,b,callback)
{
    return callback(a,b);
}

function sum(a,b)
{
return a+b;
}

let result=cal(2,3,sum);
console.log(result);

//callback hell
