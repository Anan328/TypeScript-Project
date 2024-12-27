"use strict";
const anchor = document.querySelector('a'); // handles null errors
const ul = document.querySelector('.item-list');
const form = document.querySelector('.new-item-form'); // The typecasting tells TypeScript that these element is specifically a form
const type = document.querySelector('#type'); // The typecasting tells TypeScript that these elements are specifically select elements
const ToFrom = document.querySelector('#tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
const button = document.querySelector('button');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    li.innerHTML = `<b>Type:</b> ${type.value} <b>Name:</b> ${ToFrom.value} <b>Details:</b> ${details.value} <b>Amount:</b> ${amount.valueAsNumber} `; // here valueAsNumber turns it into a number because js by default converts it to the string
    ul.appendChild(li);
    console.log('test');
});
