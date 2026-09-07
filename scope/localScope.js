function test() {
  var name="ankita";
  console.log(name);//20
}
test();
//console.log(name);//ReferenceError

function test1(a,b)
{
    console.log(a,b);
}

test1(10,20);


function demo()
{
var a=10
let b =20;
const c=30;

{
  console.log(a);//10
  console.log(b);//20
  console.log(c);//30

}
}
demo();
