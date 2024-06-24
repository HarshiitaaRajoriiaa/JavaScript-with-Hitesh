/**
 * GLOBAL SCOPE:
 * global scope is the widest scope available. Variables declared in global scope are accessible from anywhere in your code, whether it's inside functions, conditional statements, loops, or other blocks of code.
 */
var globalVariable = "I'm in global scope";

function myFunction() {
  // This function can access globalVariable
  console.log(globalVariable);
}

myFunction();