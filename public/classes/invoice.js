export class Invoice {
    // readonly client: string;
    // private details: string;
    // amount: number;
    constructor(client, // works only if we use access modifiers before them
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
