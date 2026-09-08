
try {
    console.log(x);
  
}
catch (error) {
    console.log("Caught!"); //Caught! ReferenceError: x is not defined
}
//finally
finally {
    console.log("it will execute");
}

try {
    let number = 10;
    number.toUpperCase();
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

try {
    let number = 10;
    number.push("ankita");
} catch (error) {
    console.log("TypeError: number.push is not a function");
}


try {
    demo();
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

//Throw

    let a = 2 * 2;
    throw new Error(a);// it will stop the program execution if we don't put it inside try catch block


let x = ""
try {
    if (x == "") throw "is Empty";
    let b = 2 * "string"; //Once JavaScript reaches a throw statement, the remaining code in that try block is skipped.
    if (isNaN(b)) {
        throw "Not a number";
    }
    if (x > 10) throw "too high";
    if (x < 5) throw "too low";
}
catch (err) {
    console.log(err);
}
//LoginError

function login(username, password) {
    if (username != "" && password != "") {
        if (username == "Ankita" && password == 123) {
            console.log("logged in succeffully");
        }
        else {
            throw "login fail!";
        }
    }
    else
        throw "Username or password is empty";
}

try {
    login("", "");
}
catch (err) {
    console.log("hi", err);}
