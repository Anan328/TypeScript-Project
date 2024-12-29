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

})    
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

const addUID = <T extends {name: string}>(obj: T) => { // T is conventional which stands for type but we can name it anything meaningful based on the context.
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
  }
  
  let docOne = addUID({name: 'yoshi', age: 40});
  //let docTwo = addUID('shaun');
  
  console.log(docOne.name); // without genereic we could only access docOne not docOne.name because we are not specifying what this object is and what properties it has 

    // with interfaces
interface Resource<T> { 
    uid: number;
    resourceName: string;
    data: T; // here the data could be anything string,object or array so we use generic
  }
  
  const docThree : Resource<object> = {
    uid: 1, 
    resourceName: 'person', 
    data: { name: 'shaun' }
  };
  
  const docFour: Resource<string[]> = {
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
    


