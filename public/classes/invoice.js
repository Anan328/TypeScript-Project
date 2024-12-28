export class Invoice {
    // readonly client: string;
    // private details: string;
    // amount: number;
    constructor(recepient, // works only if we use access modifiers before them
    details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recepient} is owed £${this.amount} for ${this.details}`;
    }
}
