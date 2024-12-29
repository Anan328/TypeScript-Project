import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payment.js';
const anchor = document.querySelector('a'); // handles null errors
const ul = document.querySelector('.item-list');
const form = document.querySelector('.new-item-form'); // The typecasting tells TypeScript that these element is specifically a form
const type = document.querySelector('#type'); // The typecasting tells TypeScript that these elements are specifically select elements
const ToFrom = document.querySelector('#tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
// const button = document.querySelector('button')!; 
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(ToFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(ToFrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(doc);
    e.preventDefault();
    list.render(doc, type.value, 'end');
});
// Generics
// Generics allow functions, classes, and interfaces to work with any data type while maintaining type safety.
// Use angle brackets (<T>) to define a placeholder for the type.
// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
//let docTwo = addUID('shaun');
console.log(docOne.name); // without genereic we could only access docOne not docOne.name because we are not specifying what this object is and what properties it has 
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
};
const docFour = {
    uid: 1,
    resourceName: 'shoppingList',
    data: ['bread', 'milk']
};
console.log(docThree, docFour);
// const li = document.createElement('li');
// const heading = document.createElement('h4');
// heading.innerHTML = type.value;
// li.appendChild(heading);
// li.innerHTML += `<b>Name:</b> ${ToFrom.value} <b>Details:</b> ${details.value} <b>Amount (£):</b> ${amount.valueAsNumber} `; // here valueAsNumber turns it into a number because js by default converts it to the string
// ul.appendChild(li);
