import {Customer} from "./customer"

export class Branch {
    private name : string;
    private customers: Array<Customer>;

    constructor(name: string) {
        this.name = name;
        this.customers = new Array<Customer>();
    }
}