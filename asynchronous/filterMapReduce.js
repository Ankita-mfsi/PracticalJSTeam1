//filter- creates a new array of elements after filtering the records
//map is use to return a new array after performing action in each value
//reduce is to take multiple values from an array and combine them into one final result.

 let arr = [10, 20, 2, 3, 6, 76, 11, 12, 98]
//const arrFilter=arr.filter((arr)=>arr>10&&arr<70); //[ 20, 11, 12 ]
const arrFilter = arr.filter((ar) => { 
    
    return ar > 10 && ar < 70 });
console.log(arrFilter);

//users more than 20
const users = [
    {name:"Ankita", age:26},
    {name:"Jhon", age:12},
    {name:"Max", age:14},
    {name:"alice", age:80}
    
];
const userFilter=users.filter((user)=>{
return user.age>20;
});
console.log(userFilter);

//Useractive adn age is above 20
const usersActive = [
    {name:"Ankita", age:26, active: false},
    {name:"Jhon", age:12, active:true},
    {name:"Max", age:14, active: true},
    {name:"alice", age:80, active:true}
    
];
const userActiceFilter=usersActive.filter((user)=>{
return user.age>20&&user.active==true;
});
console.log(userActiceFilter);

//map
const arrMap=arr.map((values)=>{
    return values+2;
});
console.log(arrMap);

//Create greeting
const names = ["John", "Sarah", "Mike"];
const greetName=names.map((n)=> `Hello ${n}`);
console.log(greetName);

//Extract name of the object
const fruits=[
    {Name: "Orange", price: 99 },
    {Name: "Apple", price: 130 },
    {Name: "Banana", price: 60 },
    {Name: "Kiwi", price: 160 },
];
let fruit=fruits.filter((fruit)=>{
return fruit.price>=100}).map((f)=>{
    return f.price+2;
})
console.log(fruit);

//chaining
const both=arr.map((val)=>
{
    return val*2
}).filter((val)=>val>20);
console.log(both);

//reduce
const arrReduce=arr.reduce((acc,currentValue)=>{
    console.log(acc,currentValue);
    return acc+currentValue;
},1);
console.log(arrReduce);

const employees = [
  { name: "Alice", salary: 50000 },
  { name: "Mike", salary: 60000 },
  { name: "Victoria", salary: 45000 },
  { name: "Sara", salary: 70000 }
];

const e=employees.reduce((total, emp)=> total+emp.salary,0);
console.log(e);


/*
Initial value
     
   total = 0
     ↓
Alice:  0 + 50000   = 50000
     ↓
Mike: 50000 + 60000 = 110000
     ↓
Victoria:  110000 + 45000 = 155000
     ↓
Sara:  155000 + 70000 = 225000
     ↓
     e = 225000*/