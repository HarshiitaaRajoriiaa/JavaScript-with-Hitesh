/**
 * *GLOBAL SCOPE:
 * *global scope is the widest scope available. Variables declared in global scope are accessible from anywhere in your code, whether it's inside functions, conditional statements, loops, or other blocks of code.
 * *Since global variables are accessible from anywhere, they are susceptible to unintended changes and conflicts.
 * *For instance, if multiple parts of your code modify the same global variable, it can lead to unexpected behaviors and bugs that are hard to track down.
 * *Moreover, global variables can make your code less modular and organized. If everything is in the town square, it becomes challenging to manage and isolate different aspects of your program.
 */
var globalVariable = "I'm in global scope";

function myFunction() {
//This function can access globalVariable
  console.log(globalVariable);
}

myFunction();
// *Scope of var,const, and let:
var a =1;
let b =2;
const c =3;
//let and const doesn't create scope complication but var create complication:
function myFunction2() {
    var a = 2;
    console.log(a);
  }
   myFunction2()
  if (true) {
    let a = 10
    console.log( a);
    
}
console.log(a);

// *Nested Functions:
function one(){
  const username = "hitesh"
  function two(){ //Can access content of one()
      const website = "youtube"
      console.log(username);
  }
  console.log(website); //can't access content of two() outside it's {}
   two()
}
one()

if (true) {
  const username = "hitesh"
  if (username === "hitesh") {
      const website = " youtube"
      console.log(username + website); //can access
  }
  console.log(website); //can't access
}

console.log(username); //can't access username globally

// *Declaring functions:
console.log(addone(5))
function addone(num){
    return num + 1
}
//declaring like this allow 


addTwo(5) //error
const addTwo = function(num){
    return num + 2
}
addTwo(5)