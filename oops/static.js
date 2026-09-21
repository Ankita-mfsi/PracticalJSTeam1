//static keyword makes a property or method belong to the class rather than object
//class cannot be static
class Student {
    static work = "study";
    work() {
        console.log(Student.work);
    }
    static greet() {
        console.log("Hello Good morning");
    }
}
let s = new Student();
s.work();
//s.greet();//Error-TypeError: s.greet is not a function
Student.greet();

//program
class Product {
    static taxRate = 1;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPriceWithTax() {
        return this.price + this.price * Product.taxRate;
    }
}

//accessing static from child class
class A {
    static a = 10;
    static greet() {
        console.log("Hello");
    }
}
class B extends A {
    number() {
        A.greet();
        console.log(A.a);
    }

}
let c = new B();
c.number();