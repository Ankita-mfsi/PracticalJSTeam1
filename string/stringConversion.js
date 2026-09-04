//Number
let str ="32";
let n=90;
console.log(typeof str);//string
console.log(typeof(Number(str)));//number
console.log(Number("50"));// 50
console.log(Number("3.14"));// 3.14
console.log(Number("0")); // 0
console.log(Number("")); // 0
console.log(Number("hello"));// NaN

//toLocaleString-convert number to string
let num = 29;
let s = num.toLocaleString();
console.log(typeof s);//String

let num1=98.7;
console.log(typeof num1.toLocaleString());//string

//to array
let str1="Ankita";
console.log(str1.split(""));


//to string
let c=n.toString();
let str2=[];
console.log(typeof c);// String
console.log(typeof (5).toString());//String
console.log(typeof str2.toString());//string- empty


//+
console.log(1+2+"3");//33
console.log("31"+2+"3");//3123
console.log(1+21+"3.9");//223.9
console.log(5*2+"3");//103
console.log("5"+2+3);//523
//-
console.log(5-2+"3");
console.log("5"-2+3);//6
console.log("3"-null);//3-0=3
console.log("3"-undefined);//NAN
console.log(undefined-"43");//NAN

