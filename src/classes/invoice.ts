import {HasFormatter} from '../interfaces/HasFormatter.js'

export class Invoice implements HasFormatter{
    // readonly client: string;
    // private details: string;
    // amount: number;

    constructor(
        readonly recepient : string, // works only if we use access modifiers before them
        private details : string,
        public amount : number
    ){}

    format(){
        return `${this.recepient} is owed £${this.amount} for ${this.details}`
    }
}
