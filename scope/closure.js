// function outer() {
//     let name="Ankita";

//     function inner() {
//         console.log(name);
//     }

//     return inner;
// }

// let result=outer();

// result();//Ankita

//counter

// function outer()
// {
//     let counter=0;
//     function inner()
//     {
//         console.log(counter++);
//     }
//     return inner;
// }
// let result=outer();
// result();

//Bank account
function createAccount(initialBalance) {
    let balance = initialBalance;

    function deposit(deposit) {
        return balance += deposit;
    }
    function withdraw(withdraw) {
        if (balance < withdraw) {
            console.log("You don't have sufficent balance");
        }
        else {
            console.log(balance -= withdraw);
        }

    }
    function checkBalance() {
        return balance;
    }
    return { deposit, withdraw, checkBalance };
}

let account = createAccount(20000)
console.log(account.checkBalance());//20000
account.withdraw(8000);// 12000 left
account.withdraw(20000);//You don't have sufficent balance
console.log(account.deposit(12000));//24000
console.log(account.checkBalance());//24000

