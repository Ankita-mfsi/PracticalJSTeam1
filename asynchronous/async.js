//aynchronous- it allows your program to start a task like(fetching data/read file) and continue executing other code wihout waiting for that task to fincish.
//await - pauses the execution of an asynchronous function until a Promise is resolved or rejected
//aync- async keyword to declare an asynchronous function 

function greet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise is resolved 1");

        }, 5000);
    });
}

async function f1() {

    //let a= greet();// promise {pending}
    let a = await greet();
    console.log(a);
    console.log("hi");
}
f1();

function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise is resolved 2");

        }, 1000);
    });
}

async function f2() {

    let a = await test();
    console.log(a);
    console.log("This is second sync function");
}
function f3() {
    console.log("This is normal function");
}

console.log("...Checking..");
f2();
f3();


function Test1(data) {
    return new Promise((resolve, reject) => {

        if (data > 1) {
            resolve("done");
        }
        else {
            reject("failed");

        }


    });
}

async function test1Call() {
    try {
        let a = await Test1(0);
        console.log(a);
    }
    catch (error) {
        console.log(error);
    }

    //or we can use catch promise method without using async and await
    //     Test1(0).catch((result)=>{
    //   console.log(result);
    // }); 
}
test1Call();


function testChain(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (data) {
                resolve(data);
            }
            else {
                reject("No valid data");
            }


        }, 3000);

    })
}

async function testChainCall() {
    try {
        console.log("---Fetching Data---");
        let a = await testChain(false);
        console.log(a);
    }
    catch (error) {
        console.log(error);
    }
    try {
        let b = await testChain(2);
        console.log(b);
    }
    catch (error) {
        console.log(error);
    }

}
testChainCall();