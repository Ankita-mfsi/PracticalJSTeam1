class CoffeeMachine {
    getCoffee() {
        this.#boilWater();
        this.#grindCoffee();
        this.#addCoffee();
        console.log("Coffee is ready");
    }

    #boilWater() {
        console.log("Boiling water");
    }

    #grindCoffee() {
        console.log("Grinding coffee");
    }

    #addCoffee() {
        console.log("Adding coffee");
    }
}
let cm=new CoffeeMachine();
cm.getCoffee();
//cm.#addCoffee();- cannot find outside
