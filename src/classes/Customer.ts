import { ITransaction } from "./ITransaction";

export class Customer {
    private _name: string;
    private _id: string;
    private _transactions: Array<ITransaction>

    constructor(name: string) {
        this._name = name;
        this._id = name + Math.floor(Math.random() * 100);
        this._transactions = new Array<ITransaction>();
    }

    public get name(): string { return this._name; }
    public get id(): string { return this._id; }
    public get transactions(): Array<ITransaction> { return this._transactions}
    public get balance(): number { 
        if(this._transactions.length > 0) {
        return this.transactions.reduce((total, transaction) => {return total + transaction.amount},0) 
        }
        else return 0;
    }

    public addTransaction(amount: number): boolean {
       if((this.balance + amount) > 0) {    
            let transaction : ITransaction = {
                amount: amount,
                date: new Date()
            }
          
            this.transactions.push(transaction);
            return true;
       }
        return false;
    } 
}