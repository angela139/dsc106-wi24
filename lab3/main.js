// Console statements
console.log("Hello world");

let greeting = "Hello world";
console.log(greeting);

// Variables
let testVar;
console.log(testVar); // shows undefined
console.log(typeof testVar);

let testVar2 = null;
console.log(testVar2); // shows null
console.log(typeof testVar2); // shows object

let studentAge = 25;
studentAge = 26; // This is allowed because age was declared with `let`
const maxStudents = 30;
// maxStudents = 40; // This will cause an error!

// Arithmetic Operators
const number1 = 2;
const number2 = 3;
const sum = number1 + number2;
console.log(sum); //shows 5

// Increment and decrement examples
let a = 1,
  b = 1,
  c = 2,
  d = 2;
// Prefix increment
console.log(++a); // Outputs 2, a is now 2
// Postfix increment
console.log(b++); // Outputs 1, b is now 2
// Prefix decrement
console.log(--c); // Outputs 1, c is now 1
// Postfix decrement
console.log(d--); // Outputs 2, d is now 1

console.log("Result of comparing with == ", "1" == 1); //shows true
console.log("Result of comparing with === ", "1" === 1); //shows false

// Functions
function add(number1, number2) {
  const sum = number1 + number2;
  return sum;
}

const result = add(437, 34290093);
console.log(result);

const fullName = { 
    firstName: 'Ben', 
    lastName: 'Bitdiddle'
}

console.log(fullName.firstName);
// fullName[‘firstName’] also works

const personDetails = {
    fullName: {
      firstName: 'Ben',
      lastName: 'Bitdiddle' 
    },
    getName: function() {
      return this.fullName.firstName + " " + this.fullName.lastName;
    }
  }
  
  const personName = personDetails.getName();
  console.log(personName);

// Arrays
let arr = [];
let fruits = ["Apple", "Orange", "Plum"];

console.log( fruits[0] ); // Apple
console.log( fruits[1] ); // Orange
console.log( fruits[2] ); // Plum

fruits[2] = 'Pear';
fruits[3] = 'Lemon';
console.log(fruits.length);

let mix = ["hello", 123, personDetails];
console.log(mix[2].fullName)

console.log(fruits); // before
const lemon = fruits.pop();
console.log(fruits); // after

fruits.push(lemon);
console.log(fruits); // after

// Example:
let fruitsBasket = ["Apple", "Orange", "Pear"];
console.log( fruitsBasket .shift() ); // remove Apple and log it
console.log( fruitsBasket ); // Orange, Pear

// Example:
let fruitsCollection = ["Apple"];
fruitsCollection .push("Orange", "Peach");
fruitsCollection .unshift("Pineapple", "Lemon");
console.log( fruitsCollection );
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]

// Flow Control
age = 19 // fill this in with your actual age!
if (age < 18) { 
  console.log("You’re not an adult");
} else { 
  console.log("You’re an adult");
}

const experienceYears = 2;
if(experienceYears < 5) { 
  console.log("You’re a beginner");
} else { 
  console.log("You’re experienced");
}

const score = 90;
if(score < 0) { 
  console.log("You provided an invalid score!");
} else if(score < 50) { 
  console.log("You did not pass");
} else { 
  console.log("You passed!");
}

const temperature = 60;
if(temperature == null || temperature < -273.15) { 
  console.log("You provided an invalid temperature!");
} else if(temperature < 0) { 
  console.log("It's freezing");
} else { 
  console.log("It's above freezing");
}

// Loop
for (let i = 0; i < fruits.length; i++) {
    console.log( fruits[i] );
}
  
for (const fruit of fruits) {
    console.log( fruit );
}
  
fruits.forEach(fruit => console.log(fruit, "with forEach"));

// Exercise 
function areValidEmails(inputList) {
    for (const email of inputList){
        if (!email.endsWith("@ucsd.edu")){
            return false
        }
    }
    return true
  }
  
// Test cases:
const list1 = ["alice@ucsd.edu", "bob@ucsd.edu", "eve@ucsd.edu"];
console.log(areValidEmails(list1)); // should return true

const list2 = ["alice@ucsd.edu", "bob@ucsd.edu", "eve@harvard.edu"];
console.log(areValidEmails(list2)); // should return false

const list3 = ["alice", "bob@ucsd.edu"];
console.log(areValidEmails(list3)); // should return false
  