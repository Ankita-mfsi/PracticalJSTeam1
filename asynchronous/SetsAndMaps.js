//Set is an object which has the Collection of unique values
//A JavaScript Map is an object that can store collections of key-value pairs
let numbers = new Set();
numbers.add(20);
numbers.add(30);
numbers.add(20);
numbers.add("Ankita");
numbers.add("ankita");
// numbers.add(null);
// numbers.add(undefined);

for (let number of numbers) {
    console.log(number);
}

let arr = [20, 30, 12, 12, 12, 43]
let arrSecond = new Set(arr); //Set(4) { 20, 30, 12, 43 }
console.log(arrSecond);

//using spread
let arrSpread = [...new Set(arr)];
console.log(arrSpread);

//size property
console.log(numbers.size);

//has()method- return trre if particular value is present
if (numbers.has(12)) {
    console.log("Value is present");
}
else {
    console.log("Value is not present");
}

//delete use to delete the particular value
numbers.delete(12);
console.log("After deleting the value 12", numbers); /// Set(3) { 20, 30, 43 }

//clear() removes everything in set
numbers.clear();
console.log("After clearing the set", numbers); //After clearing the set Set(0) {}

//MAPS

//Create a new Map and add elements with set() method
let colours = new Map();
let s=Symbol(12);
colours.set("red", 1);
colours.set("pink", 2);
colours.set("black", 3);
colours.set(true, 4);
colours.set(false, 9);
colours.set(s,"symbol");
console.log(colours.get("pink"));//2
console.log(colours.get("black"));//3 
console.log(colours.get(true));
console.log(colours.get(s));
for (let [key, value] of colours) {
    console.log(key, value);
    /*
    red
    pink
    black
    */
}
for (let a of colours) {
    console.log(a);
    /*
  [ 'red', 1 ]
  [ 'pink', 2 ]
[ 'black', 4 ]
    */
}

//let fruits=["Apple","mango","Kiwi"];
let fruitsMap = new Map([[1, "Apple"], [2, "Mango"], [3, "Kiwi"]]);
console.log(fruitsMap);
console.log(fruitsMap.get(1))
fruitsMap.set(4, "Banana");
fruitsMap.set(4, "Banana"); //ignoring the duplicate
console.log(fruitsMap);

//changing the value
fruitsMap.set(4, "cherry");
console.log(fruitsMap.get(4));
console.log(fruitsMap);
console.log(typeof fruitsMap);

//delete
fruitsMap.delete(4);
console.log(fruitsMap);

//clear
fruitsMap.clear();
console.log(fruitsMap);
/*
---difference between object and map---
object is not directly iterable via for of
object does not have size method
Object key can be string or symbol but map key can be any dataype
Keys are not well ordered[diff. bhevaiour for number key and string key]	Keys are ordered by insertion
*/
let id = Symbol("id");
let person = {
    name: "Ankita",
    [id]: 123
};
console.log(person[id]);



