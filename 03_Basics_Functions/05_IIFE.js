// *Immediately Invoked Function Expressions (IIFE)
// *An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// *The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// *The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
//In JavaScript, we sometimes want to use a  piece of code immediately and then put it away, without anyone else being able to touch it later.
(function () {
    console.log("h1")
  })();

(() => {
    console.log("Arrow IIFE")
  })();
  

(() => {
    // some initiation code
    let firstVariable;
    let secondVariable;
  })();
  
// firstVariable and secondVariable will be discarded after the function is executed.


// *NAMED IIFE:
(function chai(){
    console.log(`DB CONNECTED`);
})();

// *PARAMETERIZED IIFE:
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

//chai() //will not executed, because it is terminated right after being called.