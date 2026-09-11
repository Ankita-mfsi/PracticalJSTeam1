//Pending state
const p1 = () => {
    return new Promise((resolve, reject) => {
        console.log("Iam a promise 1");
    });
}
let pending = p1();
console.log(pending);

//resolve- fullfilled state
const p2 = () => {
    return new Promise((resolve, reject) => {
        console.log("Iam a promise 2");
        resolve("promise has been resolved");
    });
}
let res = p2();
console.log(res);

//rejected state
const p3 = () => {
    return new Promise((resolve, reject) => {
        console.log("Iam a promise 3");
        //reject("promise has been rejected");
    });
}
let rej = p3();
console.log(rej);

//Both rejected and resolve
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Iam a promise");
        resolve("...resolved");
        console.log("after resolve");
        // reject("error"); //if rejected is written after resolve then reject will be ignored
        console.log("after resolve1");
    });
}
let p = getPromise();
console.log(p);
p.then(() => {
    console.log("Okay");
});
p.catch(() => {
    console.log("Failed");
})

//setTimeout
const greet = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hi this is ankita");
            resolve("it will print");
        }, 3000);

    });
};
let g = greet();
g.then((res) => {
    console.log(res);
});

g.catch((rej) => {
    console.log(rej);
})

//Promise chaining
const f1 = (() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data1...")
            resolve("Data 1 fetched");
        }, 2000);

    });
});

const f2 = (() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data2...")
            resolve("Data 2 fetched");
        }, 2000);
    });
});

console.log("...Fetching data...");
f1().then((res) => {
    console.log(res);
    f2().then((res) => {
        console.log(res);
    });

});