const x = "hello world of typeScript!!";
console.log(x);


const circ = (diameter: number) => {
    return diameter * Math.PI;
}
console.log(circ(7));

// arrays

let names = ['anan','rehmat','asad'];

// names = 'string' // not possible, we cannot change array to string

names.push('dua'); // possible

// names.push(3); // not possible


let mixedArray = [4,'anan','script'];

mixedArray.push("JS"); // possible
mixedArray.push(2); // possible

// Objects


let myObj = {
    name : 'ANAN',
    score: 98,
    status: true, 
    display : function() {
        if(this.status) console.log("Approved");
        }
}

// myObj.skills = ['react', 'node'] // not possible

// myObj = [] // not possible

//  myObj = { // possible, if any of the key is removed or added then it is not possible
//     name : 'User', // name: 2, // not possible
//     score: 99, 
//     status: true, 
//     display : function() {
//         if(this.status) console.log("Approved");
//         }
// }

myObj.score = 99; // possible
// myObj.score = '99' // not possible

// myObj['name'] = 3 // not possible

console.log(myObj);


// Explicit Types

let mychar: string;

let age:number;

let check:boolean;


mychar = 'hello'; check = true;


// Explicit Types: arrays

let nums : number[] = []; // we declare it as an empty array because if we try to push it will show error in webrowser console

nums = [1,2,3,4,5];

// Explicit Types: union types

let id : (string | number); // or let id : string | number; 
id = '2'; id = 2; // both possible
console.log(id);

let mixed : (string | number) [] = []; // here paranthesis is must
mixed.push('hello');
mixed.push(4);
// mixed.push(true); // error
console.log(mixed);


// Explicit Types: Object

let record: object= {};

record = {
    name : 'anan',
    id : 2
}
// record = [] ; // possible because array is an object
// record = '' ; // not possible
console.log(record);

// defining type for an object

let ObjectSchema : {
    name : string,
    id : number,
    check : boolean
}

ObjectSchema = {
    name : 'anan',
    id : 2,
    check : true
}
console.log(ObjectSchema);


let obj2 : {name : string ,id : number | string ,check : boolean} = {
    name: "Asad",
    id: 3,
    check: false
}
 console.log(obj2);
 

// any type

let variable: any; // used in rare cases

variable = 25;           // Valid
variable = "twenty-five"; // Also valid
variable = true;          // Still valid

console.log(variable);

let mixedArray1 : any[] = [];

mixedArray1.push('1');
mixedArray1.push(1);
mixedArray1.push(true);

mixedArray1.forEach((i)=>{
    console.log(i);
    
})


let mixedObj : any  = {
    name: 'Anaan',
    id : 2
}

mixedObj = []; // valid


// Function Basics

let greet : Function | number[];

greet = (firstname: string, E_id?: number)=>{ // ? means optional parameter // put at end
    console.log("hello!! ",firstname);
    console.log(E_id);
    
}
greet("Anaan");
greet("Anaan",2);

greet = [1,2,3]; // also valid

let greet1 = (firstname: string, E_id : number = 1): void=>{ // deafult value without ?  // put at end
    console.log("hello!! ",firstname);
    console.log(E_id);
    
}

greet1("Anaan");

const minus = (a : number , b : number) : number=>{ // : number  means return type is number , not compulsory
    return a - b;
}

let result = minus(10,5);

// result = "subtract"; // not valid

// const inputs = document.querySelectorAll('input');
// console.log(inputs);

// inputs.forEach((input)=>{
//     console.log(input);
// })

