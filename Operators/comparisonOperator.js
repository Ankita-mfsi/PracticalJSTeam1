let a=10
let str="10";
let b=5;
let c=6;

//equals
console.log(a==b);//f
console.log(a==str);//t
console.log(10=="10");//t


//strictEquals
console.log(a===b);//f
console.log(a===b)//f
console.log(10==="10");//f


//greaterThan
console.log(a>b);//t
console.log("80">7);//t
console.log("78">9n);//t integer is the number and bigint is not
console.log("null"==null);
console.log()

//lessThan
console.log(a<b);//f

//lessThanEquals
console.log(b<=c);//t

//greaterThanEquals
console.log(b>=c);//f

//NotEquals
console.log(b!=c);//t


