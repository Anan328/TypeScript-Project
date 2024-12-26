var x = "hello world of typeScript!!";
console.log(x);
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7));
// arrays
var names = ['anan', 'rehmat', 'asad'];
// names = 'string' // not possible, we cannot change array to string
names.push('dua'); // possible
// names.push(3); // not possible
var mixedArray = [4, 'anan', 'script'];
mixedArray.push("JS"); // possible
mixedArray.push(2); // possible
// Objects
var myObj = {
    name: 'ANAN',
    score: 98,
    status: true,
    display: function () {
        if (this.status)
            console.log("Approved");
    }
};
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
var mychar;
var age;
var check;
mychar = 'hello';
check = true;
// Explicit Types: arrays
var nums = []; // we declare it as an empty array because if we try to push it will show error in webrowser console
nums = [1, 2, 3, 4, 5];
// Explicit Types: union types
var id; // or let id : String | number; 
id = '2';
id = 2; // both possible
console.log(id);
var mixed = []; // here paranthesis is must
mixed.push('hello');
mixed.push(4);
// mixed.push(true); // error
console.log(mixed);
// Explicit Types: Object
var record = {};
record = {
    name: 'anan',
    id: 2
};
// record = [] ; // possible because array is an object
// record = '' ; // not possible
console.log(record);
// defining type for an object
var ObjectSchema;
ObjectSchema = {
    name: 'anan',
    id: 2,
    check: true
};
console.log(ObjectSchema);
var obj2 = {
    name: "Asad",
    id: 3,
    check: false
};
console.log(obj2);
// const inputs = document.querySelectorAll('input');
// console.log(inputs);
// inputs.forEach((input)=>{
//     console.log(input);
// })
