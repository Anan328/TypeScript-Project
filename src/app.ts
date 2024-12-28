import {Invoice} from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';

const anchor = document.querySelector('a')!; // handles null errors
const ul = document.querySelector('.item-list')! as HTMLUListElement;
const form = document.querySelector('.new-item-form') as HTMLFormElement; // The typecasting tells TypeScript that these element is specifically a form
const type = document.querySelector('#type')as HTMLSelectElement; // The typecasting tells TypeScript that these elements are specifically select elements
const ToFrom = document.querySelector('#tofrom')as HTMLInputElement;
const details = document.getElementById('details')as HTMLInputElement;
const amount = document.getElementById('amount')!as HTMLInputElement;
// const button = document.querySelector('button')!; 

const list = new ListTemplate(ul);

form.addEventListener('submit',(e:Event)=>{

    let doc : HasFormatter;

    if(type.value === 'invoice'){
        doc = new Invoice(ToFrom.value,details.value,amount.valueAsNumber);
    }else{
        doc = new Payment(ToFrom.value,details.value,amount.valueAsNumber);
    }
    // console.log(doc);
    e.preventDefault();

    list.render(
        doc , type.value, 'end'
    );


    // const li = document.createElement('li');
    // const heading = document.createElement('h4');
    // heading.innerHTML = type.value;
    // li.appendChild(heading);
    // li.innerHTML += `<b>Name:</b> ${ToFrom.value} <b>Details:</b> ${details.value} <b>Amount (£):</b> ${amount.valueAsNumber} `; // here valueAsNumber turns it into a number because js by default converts it to the string
    // ul.appendChild(li);
    
})

