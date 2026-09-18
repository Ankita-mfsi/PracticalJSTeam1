//An Iterator is an object that allows you to access elements one by one from a collection,s[Sritng,set map array].
//A Generator in JavaScript is a special type of function that can pause its execution and resume it later.

let arrNum=[10,20,30];
let it=arrNum[Symbol.iterator]();
console.log(it.next().value);//it will print the value 10
console.log(it.next());
console.log(it.next());
console.log(it.next());

const fruits=[
    {Name: "Orange", price: 99 },
    {Name: "Apple", price: 130 },
    {Name: "Banana", price: 60 },
    {Name: "Kiwi", price: 160 },
];
let fruitIT=fruits[Symbol.iterator]();
console.log(fruitIT.next().value);//{ Name: 'Orange', price: 99 }, done: false }
console.log(fruitIT.next().value.Name);
console.log(fruitIT.next().value.Name);

//String
const userName = "Ankita";
const nameIt = userName[Symbol.iterator]();
console.log(nameIt.next());
console.log(nameIt.next());
console.log(nameIt.next());


console.log("--Generator--");

//generator
//function** syntax error
function* numbers() {
  yield 1,2;
  yield "Ankita";
  yield true;
  yield 78999n
}

const gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


function* test() {
  console.log("Start");
  yield 10; //pause the execution until user calls the function by using next
  console.log("Middle");
  yield 20;
  console.log("End");
}
let genTest=test();
genTest.next();
genTest.next();
genTest.next();
genTest.next();//Nothing will be printed
genTest.next();//Nothing will be printed
console.log(genTest.next());//yield will be printed value: undefined, done:true
console.log(genTest.next().value);//it will print the value undefined

//DATE
//get any month from current month
let input = require("readline-sync");
let monthNum=Number(input.question("Enter the month from the current month"));
let date=new Date();
let months=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
function* date1(date,monthNum)
{
  date.setMonth(date.getMonth()+monthNum);
  yield date;
}
let genDate=date1(date,monthNum);
let a=months[(genDate.next().value.getMonth())];
console.log(a);

//Find Date after 3 months later from current date
function* year(date)
{
  date.setFullYear(date.getFullYear()+6);
  yield date;
}
let genYear=year(date);
console.log(genYear.next().value.getFullYear());

//Random date
function* randomDate(date)
{
 date.setDate(Math.floor(Math.random()*30)+1);
  yield date;
}
let genrandomDate=randomDate(date);
console.log(genrandomDate.next().value);
