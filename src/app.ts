// Interface: Defines the structure of an object (properties/methods), used for object shapes and extension.
// Type Aliases: Used to create custom types for better readability and reusability.
// Difference:
// 1. Interface supports declaration merging and extending other interfaces.
// 2. Type alias is more flexible (can define unions, intersections), but doesn’t support declaration merging.

interface isPerson{
    name: string,
    age : number,
    speak(a : string) : void;
    spend(a : number) : number;
}

let me : isPerson = {
    name : "Anaan",
    age : 23,
    speak: function(lang) {
        console.log(`The ${this.name} speaks ${lang}`); 
    },
    spend : (num)=> (num)
};

console.log(me);


import {Invoice} from './classes/invoice.js';

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// console.log(invOne, invTwo);

let invoices : Invoice[] = []; // only objects created using Invoice class can be added to this array

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv=>{
    console.log(inv.client,inv.amount,inv.format());
    
});

// console.log(invoices);


// invoices.push("hello"); // not valid
// invoices.push({name:'test'}) // not valid




const anchor = document.querySelector('a')!; // handles null errors
const ul = document.querySelector('.item-list')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement; // The typecasting tells TypeScript that these element is specifically a form
const type = document.querySelector('#type')as HTMLSelectElement; // The typecasting tells TypeScript that these elements are specifically select elements
const ToFrom = document.querySelector('#tofrom')as HTMLInputElement;
const details = document.getElementById('details')as HTMLInputElement;
const amount = document.getElementById('amount')!as HTMLInputElement;
// const button = document.querySelector('button')!; 

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    const li = document.createElement('li');
    const heading = document.createElement('h4');
    heading.innerHTML = type.value;
    li.appendChild(heading);
    li.innerHTML += `<b>Name:</b> ${ToFrom.value} <b>Details:</b> ${details.value} <b>Amount (£):</b> ${amount.valueAsNumber} `; // here valueAsNumber turns it into a number because js by default converts it to the string
    ul.appendChild(li);
    
})

