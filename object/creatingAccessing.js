//Creation Using Object Literal
let obj = {
    name: "Ankita",
    age: 26,
    job: "Tester"
    
};
//console.log(obj);

//creation Using new Object() Constructor
let obj1 = new Object();
obj1.name = "Ankita Gusain",
    obj1.age = 26,
    obj1.job = "Tester"
   
//console.log(obj1);

//creating object with object,array function
let obj3 = {
    name: "Ankita",
    age: 26,
    job: "Tester",
    address: {
        country: "India",
        state: "UK"
    },
    function: function() {
        console.log("This is inside object");//This is inside object undefined
    },
    function1: function()
    {
        return`Thsi is with return`;
    } ,
    function2: function(name)
    {
        return `hi I'm ${name}`;
    },
    arr: [1,2,3,4,6]
};
//Accessing Object
console.log(obj3.address.country);

//Accessing Function
console.log(obj3.function());//This is inside object, returns undefined
console.log(obj3.function2("Ankita"));
console.log(obj3.function1());

//Accessing Array 
console.log(obj3.arr);
console.log(obj3.arr[2]);

//Accessing object properties
console.log(Object.keys(obj1));

//Accessing only values
console.log(Object.values(obj));

//Accessing Both 
console.log(Object.entries(obj));

//Modify/updating objects
obj.age = 27;
console.log(obj.age);
console.log(obj["age"]);

//deleting object
delete obj.age;
console.log(obj);

//creating object inside object key and value
obj.address = {
    country: "India",
    state: "Uttarakhand"
};

//accessing value
console.log(obj.address.country);

//accessing both
for(let a in obj3)
{
    console.log(a, obj3[a]);
   }

//accessing only values
for(let a in obj)
{
    console.log(obj[a]);
}

//accessing only keys
for(let a in obj)
{
    console.log(a);
}
//copy object
 let obj2=obj;
console.log(obj2);
obj.name="Ankita Gusain";// obj and obj2 sharing the same memeory
console.log(obj2);
Object.assign(obj)

//total marks
let total=0;
for (let a in student)
{
    if(a=="math"||a=="science"||a=="english")
    {
        total+=student[a];
    }
}
console.log(total);