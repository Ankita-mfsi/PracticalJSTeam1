class BankAccount {
    #balance = 10000; //private- we have public and private access modifier

    deposite(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#balance -= amount;
    }
    totalBalance() {
        return this.#balance;
    }
}
let b = new BankAccount();
b.deposite(2000);
console.log(b.totalBalance());
b.withdraw(2000);
console.log(b.totalBalance());
//console.log(b.#balance); syntax error

//student name and marks

class Students {

    #name;
    #marks;
    constructor(name, marks) {
        this.#name = name;
        this.#marks = marks;
    }
    getName() {
        console.log(`Student name is ${this.#name}`);

    }
     setMarks(marks) {
        
            if (marks == 0 || marks > 100) {
                console.log("Invalid marks");
                this.#marks = marks;
            }
            else
                this.#marks = marks;
        
    }
   
    getMarks() {
        return this.#marks;
    }
    getGrade() {
        this.getMarks();
        if (this.#marks >= 90 && this.#marks <= 100) {
            console.log("A");
        }
        else if (this.#marks >= 80 && this.#marks <= 89) {
            console.log("B");
        }
        else if (this.#marks >= 70 && this.#marks <= 79) {
            console.log("C");
        }
        else if (this.#marks >= 60 && this.#marks <= 69) {
            console.log("D");
        }
        else {
            console.log("F");
        }
    }

}
let s=new Students("Ankita",80);
s.setMarks(198);
s.getGrade();