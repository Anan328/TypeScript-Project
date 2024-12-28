import {HasFormatter} from '../interfaces/HasFormatter.js'

export class Payment implements HasFormatter{
    constructor(
        readonly client : string, // works only if we use access modifiers before them
        private details : string,
        public amount : number
    ){}

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}
