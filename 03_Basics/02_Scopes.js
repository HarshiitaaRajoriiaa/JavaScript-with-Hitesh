/**
 * GLOBAL SCOPE:
 * global scope is the widest scope available. Variables declared in global scope are accessible from anywhere in your code, whether it's inside functions, conditional statements, loops, or other blocks of code.
 * Since global variables are accessible from anywhere, they are susceptible to unintended changes and conflicts.
 * For instance, if multiple parts of your code modify the same global variable, it can lead to unexpected behaviors and bugs that are hard to track down.
 * Moreover, global variables can make your code less modular and organized. If everything is in the town square, it becomes challenging to manage and isolate different aspects of your program.
 */
// var globalVariable = "I'm in global scope";

// function myFunction() {
//   // This function can access globalVariable
//   console.log(globalVariable);
// }

// myFunction();
var a =1;
let b =2;
const c =3;
// let and const doesnt create scope complication but var create complication:
// function myFunction2() {
//     var a = 2;
//     console.log(a);
//   }
//    myFunction2()
  if (true) {
    let a = 10
    console.log("INNER: ", a);
    
}
console.log(a);
