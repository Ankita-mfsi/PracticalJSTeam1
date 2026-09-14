//An arrow function is simply another way of writing a function.
// it does not have its own this
// => expects expression or {}


//normal function
function test1() {
    console.log("This is normal function");
}
test1();
let arrow = () => {
    console.log("This is arrow function");
}
arrow();

//arrow function with return without parameter
let arrow2 = () => {
    return `This is with return without parameter`;
}
console.log(arrow2());

//arrow function with return with parameter
let arrow3 = (name) => {
    return `This is ${name} return ${name} parameter`;
}
console.log(arrow3("with"));

//arrow function without return without parameter
let arrow4 = () => {
    console.log(`This is without return without parameter`);
}
arrow4();//This is without return without parameter 

//arrow function without return with parameter
let arrow5 = (name) => {
    console.log(`This is ${name} return ${name}parameter`);
    }
arrow5("without"); //arrow function without return with parameter undefined

//single linear without using () and parenthesis
const square = x => x*x;
console.log(square(2));

const age1 = x => { //parenthesis is madatory because => fun expect either expression or {} after this
    if (x > 10) {
        console.log("ok");
    }
};
age1(12);

//Normal function
const person = {
    name: "Ankita",

    greet: function() {
        console.log(this.name);
    }
};

person.greet();

//this- arrow function does not have its own this
const person1 = {
    name: "Ankita",

    greet1: () => {
        console.log(this.name);
    }
};

person1.greet1();

const person2 = {
    name: "Ankita",

    greet2: () => {
        const inner=()=>{
        console.log(this.name);
        }
        inner();
    }
};

person2.greet2();
const person3 = {
    name: "Ankita",

    greet3: function() {
        const inner = () => {
            console.log(this.name);
        };

        inner();
    }
};

person3.greet3();