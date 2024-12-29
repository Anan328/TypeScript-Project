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
    e.preventDefault();

    let values: [string, string, number]; // tuple // fixed data type once initialized
    values = [ToFrom.value, details.value, amount.valueAsNumber];

    let doc : HasFormatter;

    if(type.value === 'invoice'){
        doc = new Invoice(... values); // passes elemnts individually and not the whole array
    }else{
        doc = new Payment(... values);
    }
    // console.log(doc);
    

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

const addUID = <T extends {name: string}>(obj: T) => { // captures whatever item / properties we pass to the function

    // T is conventional which stands for type but we can name it anything meaningful based on the context.

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

 
   // ENUMS

   // Enum defines a set of named constants with default numeric values starting from 0.


enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

interface Resources<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const One: Resources<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' }
}
const Two: Resources<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR,
  data: { title: 'name of the wind' }
}

console.log(One);
console.log(One.resourceType); // 0 , here we could have manually typed 0 while creating the object One but when project gets bigger we cannot remember them so we assign a name to constants using Enum

console.log(Two);
console.log(Two.resourceType); // 3


// TUPLES // fixed data type once initialized
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false; // not valid
tup[0] = 'ken';

let student: [string, number];
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];

    // const li = document.createElement('li');
    // const heading = document.createElement('h4');
    // heading.innerHTML = type.value;
    // li.appendChild(heading);
    // li.innerHTML += `<b>Name:</b> ${ToFrom.value} <b>Details:</b> ${details.value} <b>Amount (£):</b> ${amount.valueAsNumber} `; // here valueAsNumber turns it into a number because js by default converts it to the string
    // ul.appendChild(li);
    


