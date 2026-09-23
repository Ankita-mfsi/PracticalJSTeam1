class demo {
    constructor(brand, color) {
        this.brand = brand; //this line will assign the brand value to the property of the current object brand.
        this.color = color;
        console.log(`Car name is ${brand} and color ${color}`);
    }
}
let d = new demo("BMW", "blue");
let dObj = new demo("Mercedes");//Car name is Mercedes and color undefined [color para. is not passed]

//multiple constructor- not accepted
// class demo{
//     constructor(brand)
//     {
//         this.brand=brand; 
//         console.log(`Car name is ${brand}`);
//     }
//      constructor(brand)//SyntaxError: A class may only have one constructor
//     {
//         this.brand=brand; 
//         console.log(`Car name is ${brand}`);
//     }
// }
// let d=new demo("BMW");

//Using object property outside constructor
class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    studentName()
    {
        console.log(`The name of the student is ${this.name}`);
    }
    studentAge()
    {
        // console.log(`The name of the student is ${age}`);//ReferenceError: age is not defined
          console.log(`The name of the student is ${this.age}`);
    }
}
let s=new student("Ankita",26);
s.studentName();
s.studentAge();

//static this and finally super