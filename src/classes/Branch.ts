import {Customer} from "./Customer"

export class Branch {
    private _name : string;
    private _customers: Array<Customer>;

    constructor(name: string) {
        this._name = name;
        this._customers = new Array<Customer>();
    }

    public get name(): string { return this._name; }
    public get customers(): Array<Customer> { return this._customers; }

    public addCustomer(customer: Customer){
        if(this._customers.map(existingCustomer => existingCustomer.id === customer.id)) return false;
        this._customers.push(customer);
    }

    public addCustomerTransaction(id : string, amount: number) {
        let customer = this._customers.find(customer => customer.id === id);
        if(!customer) return false
        return customer.addTransaction(amount)
    }

    public findCustomer(id : string) : Customer | null {
        let customer =  this.customers.find(customer => customer.id === id);
        if(customer instanceof Customer) return customer; 
        return null;
    }
}