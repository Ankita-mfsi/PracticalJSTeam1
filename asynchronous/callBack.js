//callback with return type with arguments 
function greet(callback, name) {
    return callback(name);
}
function greetName(name) {
    return `Hi this is ${name}`;

}
console.log(greet(greetName, "Ankita"));// Hi this is Ankita

//callback with return type without arguments 
function multiply(callback) {
    return callback();
}
function Mulresult() {
    return 2 * 2;

}
console.log(multiply(Mulresult));//4

//callback without return type with arguments 
function sub(callback, a, b) {
    callback(a, b);
}
function subresult(a, b) {

    console.log(`After subtracting the numbers a+b is ${a - b}`);//-1

}
sub(subresult, 4, 5);

//callback without return type without arguments 

function greet1(callback) {
   callback();
}
function greetName1() {
    console.log(`callback without return type without arguments `);

}
greet1(greetName1);

//addition
function cal(a, b, callback) {
    return callback(a, b);
}

function sum(a, b) {
    return a + b;
}

let result = cal(2, 3, sum);
console.log(result);

// greet is function refrence and it will execute later after 4 seconds with the argument Ankita
function greet( name) {
    console.log( name);
}
setTimeout(greet,4000,"Ankita");


