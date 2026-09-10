//syntax Error
console.log("hi" //SyntaxError: missing ) after argument list

//ReferenceError
console.log(a);//ReferenceError: a is not defined

//TypeError- Occurs when an operation is performed on a value of an inappropriate type.
let a = 10;
a(); //TypeError: a is not a function

const a = 10;
a = 20;
console.log(a); //TypeError: Assignment to constant variable.

const a = "ankita";
a.push(null);//TypeError: a.push is not a function

let user = null;
const { name } = user; //TypeError: Cannot destructure property 'name' of 'user' as it is null.

//RangeError
let arr = new Array(-1); //RangeError: Invalid array length

function test() {
    test();
}

test(); //RangeError: Maximum call stack size exceeded