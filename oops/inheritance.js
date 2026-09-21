//single inheritance-One child inherits from one parent.
class Person {
    eat() {
        console.log("person eats");

    }
    sleep() {
        console.log("person sleeps");
    }
}
class Doctor extends Person {
    work() {
        console.log("person is a doctor");
    }
    sleep() {
        console.log("not much");
    }

}
let p = new Doctor();
p.work();
p.sleep();//child class function will be executed
p.eat();

//multilevel inheritance
class Animal {

    eat() {
        console.log("Eating...");
    }
}
class Dog extends Animal {
    sleep() {
        console.log("Sleeping...");
    }
}
class Puppy extends Dog {
play()
{
    console.log("Playing...");
}
}
let puppyAnimal=new Puppy();//puppy can access all class properties[Dog and animal]
puppyAnimal.eat();
puppyAnimal.sleep();
puppyAnimal.play();
let dogAnimal=new Dog();
dogAnimal.eat();
dogAnimal.sleep();
// dogAnimal.play();//TypeError: dogAnimal.play is not a function

//Hierarchical Inheritance- Multiple child classes inherit from the same parent.
class School
{
level()
{
    console.log("Kindergarten");
}


}
class Teachers extends School
{
work()
{
    console.log("Teaching...");
}
}
class Students extends School{
    books()
    {
        this.level();//calling kindergarten
        console.log("learning from books");
    }

}
let sObj=new Students();
sObj.books();
sObj.level();
let t= new Teachers();
t.work();

//SUPER keyword
class Parent{
    constructor(name)
    {
        this.name=name;
        console.log("I'm parent class constructor");
        console.log("Hello", name);
        }
demo()
{
    console.log("I'm parent class");
}
}
class Child extends Parent
{
    constructor()
    {
      
        console.log("I'm child class constructor");
          super("Ankita");// we cannot call parent class constructor from normal function
          super.demo();
    }
    greet()
    {
        // super(); //SyntaxError: 'super' keyword unexpected here
        super.demo();// we can call the parent method inside the child method and from child constructor
        console.log("Hi, how are you?");
    }
}

let c=new Child();
c.greet();
