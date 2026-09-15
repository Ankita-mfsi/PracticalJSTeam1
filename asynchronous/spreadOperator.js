//Creates shallow copy 
//Copying Array into another array
//merging array and object
"use strict"
const arr = [1, 2, 3];
const arrCopied = [12,...arr];
console.log(arrCopied);
arr.push("Ankita");
console.log(arrCopied);

//Copying object into another object
const person = {
    name: "Ankita",
    age: 26
};

const personCopied = {country: "India",...person};
console.log(personCopied);
person.name="Ankita Gusain";
console.log(personCopied);

// Min in an array using Math.min()
let a = [1,2,3,-1,-90];
console.log(Math.min(a)); //NaN
// Now using spread 
console.log(Math.min(...a));

//spread operator in function argument
let number=[50,32,40,65];
function grade(maths,science,hindi,english)
{
return maths+science+hindi+english;
}
let result=grade(...number);
console.log(result);//187

//Nested Array- shallow copy
let x = [1, 2, [3, 4]];
let y = [...x];

y[0]=0;
y[2][1]="Ankita";
console.log("after changing value from Y "+x);
console.log("after changing value from Y "+y);

x[1]=100; //it will not work for y only shallow copy works for nested array
x[2][1]="Ankita Gusain";
console.log("after changing value from X "+x);
console.log("after changing value from X "+y);

//nested Object shallow copy
const details = {
    name: "Ankita",
    age: 26,
    address:{
        country: "india"
    }
};
const personDetails={state: "Uttarakhand",...details};
console.log(personDetails);
personDetails.address.country="India";
console.log(details);

//structuredCLone- creates the deep copy of array or object
const personStructClone=structuredClone(details);
personStructClone.address.country="USA";
console.log("Printing details after changing in structured clone", details);
console.log("Printing details after changing in structured clone", personStructClone);

//merging Array
let arr1=["apple","Mango"];
let arr2=["Banana","kiwi"];
let arr3= [...arr1,...arr2];
console.log(arr3);

//merging object
let objName={
    name: "Ankita",
    lastName:"Gusain",
    favColour:["black","blue"]
}
//console.log(objName.favColour[1]); getting array value from object
let objAge={
    age:26
}
let objNameAge={...objName,...objAge};
console.log(objNameAge)

//merging object with array
let b={...objName,...arr1};
console.log(b);
console.log(b[0]);
console.log(Object.keys(b));


//merging array with object
//let c=[...arr1,...objName];//TypeError: objName is not iterable [for array it takes values]
let c={...arr1,...objName};
console.log(c);
console.log(c[0]);
console.log(Object.keys(c));