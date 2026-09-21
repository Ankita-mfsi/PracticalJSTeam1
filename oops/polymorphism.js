class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }
}

const animal = new Animal();
animal.speak();
const dog=new Dog();
dog.speak();
const cat=new Cat();
cat.speak();