//syntax Error
//console.log("hi"  //SyntaxError: missing ) after argument list

//ReferenceError
try {
    console.log(a);
}
catch (error) {
    //ReferenceError: a is not defined
}


//TypeError- Occurs when an operation is performed on a value of an inappropriate type.
try {
    let b = 10;
    a();
}
catch (error) {
    console.log(error);//TypeError: a is not a function
}

try {
    const c = 10;
    a = 20;
    console.log(a);
}
catch (error) {
    console.log(error);//TypeError: Assignment to constant variable.
}
try {

    const d = "ankita";
    a.push(null);
}
catch (error) {
    console.log(error);//TypeError: a.push is not a function
}
try {


    let user = null;
    const { name } = user;
}
catch (error) {
    console.log(error);//TypeError: Cannot destructure property 'name' of 'user' as it is null.
}
try {
    //RangeError
    let arr = new Array(-1);
}
catch (error) {
    console.log(error);
}


try {
    function test() {
        test();
    }
    test();
}

catch (error) {
    console.log(error); //RangeError: Maximum call stack size exceeded
}
//change vraible name
// add try and catch