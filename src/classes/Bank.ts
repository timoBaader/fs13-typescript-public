import {Branch} from "./Branch"
import {Customer} from "./Customer"

export class Bank {
    private _name: string;
    private _branches: Array<Branch>;

    constructor(name: string) {
        this._name = name;
        this._branches = Array<Branch>();
    }

    addBranch(branch: Branch) : boolean {
        if(this.checkBranch(branch)) return false;
        this._branches.push(branch);
        return true
    }

    addCustomer(branch: Branch, customer: Customer) : boolean {
        if(!this.checkBranch(branch)) return false;
        if(branch.findCustomer(customer.id) instanceof Customer) return false;
        branch.addCustomer(customer);
        return true;
    }

    addCustomerTransaction(branch: Branch, customerId: string, amount: number) : boolean {
        if(!this.checkBranch(branch)) return false;
        return branch.addCustomerTransaction(customerId, amount);
    }

    findBranchByName(name : string) : Array<Branch> | null {
        let result = this._branches.filter(branch => branch.name === name);
        if(result instanceof Array<Branch>) return result;
        return null;
    }

    checkBranch(branch: Branch) : boolean {
        if(this._branches.includes(branch)) return true;
        return false;
    }

    listCustomers(branch: Branch, bool : boolean) : boolean {
        let doesBranchExist = this._branches.includes(branch);
        if(doesBranchExist && bool) {
            branch.customers.map(customer => customer.transactions.map(transaction => console.log(`${customer.name}: ${transaction}`)))
        }
        return doesBranchExist;
    }

}
