import {Branch} from "./branch"
import {Customer} from "./customer"
//import {Branch, Customer} from "../classes"

class Bank {
    private name: string;
    private branches: Array<Branch>;

    constructor(name: string) {
        this.name = name;
        this.branches = Array<Branch>();
    }

    addBranch(branch: Branch) : boolean {
        if(this.branches.includes(branch)) return false;
        this.branches.push(branch);
        return true
    }

    addCustomer(branch: Branch, customer: Customer) : boolean {
        
    }
}