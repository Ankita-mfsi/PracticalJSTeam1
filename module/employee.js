import {Place,a} from "../moduleTest/place.js"

export class Emp extends Place{
    constructor(name)
    {
        super("India","Bihar");
        this.name=name;
        console.log("Exported single vairable",a);
    }
}
//makemytrip- meaningful