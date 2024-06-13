// Note
/*
First let know about the operators in javascript
All the operators are same as any onther programming language
but the most widely used operato in javascript is (===)  tripple equalto
this operator check the variable type and value both and (==)  double equalto is only check the value of  both variables are same or not .

example 
*/
let x=10;
let y="10";

console.log(" ==  Prints the value  ",x==y); //prints True
console.log(" ===  Prints the value  ",x===y); // prints False




// Most programming languages have many number types:
// byte (8-bit), short (16-bit), int (32-bit), long (64-bit) float (32-bit), double (64-bit).

// {{{{{   Javascript numbers are always one type:  }}}}}
// double (64-bit floating point).




// JavaScript Data Types are Dynamic


// =================== >> JavaScript has 8 Datatypes
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object





// =================>  JavaScript Arrays
// JavaScript arrays are written with square brackets.

// Array items are separated by commas.

// The following code declares (creates) an array called cars, containing three items (car names):

// Example
const cars = ["maruti", "Volvo", "BMW"];






// =================>  JavaScript Objects
// JavaScript objects are written with curly braces {}.

// Object properties are written as name:value pairs, separated by commas.

// Example
const person = {firstName:"anni", lastName:"kaklotar", age:20, eyeColor:"blue"};


// The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.
// The typeof operator returns the type of a variable or an expression:
// {{{{{ typeof operator returns the type of array is an object not array.}}}}}

typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

typeof {an:"anni",sk:"this "}              // Returns "object"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"