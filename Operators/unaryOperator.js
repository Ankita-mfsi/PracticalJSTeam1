let a=2;

//post increment- use value then add
console.log(a++);//2
console.log(a);//3

//pre increment- add first then use
console.log(++a);//4

//------------------------------------------------
//post decrement- use value then add
console.log(a--);//4
console.log(a);//3

//pre decrement- add first then use
console.log(--a);//2

let b= a++ + ++a; // 2+4=6
console.log(b);//6
b=--a + a--; //3 + 3 a=2
console.log(b);

