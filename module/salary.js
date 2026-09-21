import {Emp} from "./employee.js";
class Salary extends Emp

{
    constructor(salary)
    {
         super("Jhon");
         this.salary=salary
    }
    showSalary()
    {
       
        console.log(`Employee ${this.name} who lives in country ${this.country} in state ${this.state} earns ${this.salary}`);
    }
}
let s=new Salary(10000);
s.showSalary()