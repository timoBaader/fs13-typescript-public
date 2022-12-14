import { ITransaction } from "./ITransaction";

export class Customer {
    private _name: string;
    private _id: string;
    private _transactions: Array<ITransaction>

    constructor(name: string, id: string) {
        this._name = name;
        this._id = id;
        this._transactions = new Array<ITransaction>();
    }

    public get name(): string { return this._name; }
    public get id(): string { return this._id; }
    public get transactions(): Array<ITransaction> { return this._transactions}
    public get balance(): number { return this.transactions[this.transactions.length -1].amount; }
}