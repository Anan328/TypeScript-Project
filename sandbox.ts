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





// const inputs = document.querySelectorAll('input');
// console.log(inputs);

// inputs.forEach((input)=>{
//     console.log(input);
// })


