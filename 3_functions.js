// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// JavaScript Function Syntax
// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

// The code to be executed, by the function, is placed inside curly brackets: {}


function print_name( _firstName, _seconName) {
console.log(_firstName," ",_seconName);
}
print_name("anni","kalotar"); // this is called function called;


// ====>>>>>>> Function Return
// When JavaScript reaches a return statement, the function will stop executing.

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}







// ===========================        Note
// As you see from the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.

function toCelsius(fahrenheit) {
    return (50/9) * (fahrenheit-32);
}

let value = toCelsius;
console.log(value(10));// also call function like this via creating a function object ;



