let obj = {
    name: "Ankita",
    age: 26,
    job: "Tester"
    
};
//keys
console.log(Object.keys(obj));

//values
console.log(Object.values(obj));

//entries
console.log(Object.entries(obj));

//assign- creates shallow copy
let obj2=Object.assign(obj);
console.log(obj2);
obj.job="software testing";
console.log(obj2);

//total marks
let student = {
    name: "Ankita",
    math: 80,
    science: 75,
    english: 90
};
